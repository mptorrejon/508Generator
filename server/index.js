const wcag = require('wcag');
const sites = require('./sites');
const express = require('express');
const app = express();

app.get('/generate-report', (req, res) => {
  let arr = [];
  let result = {};
  sites.sites.map( site => {
    result = new Promise( (res, rej) => {
      const options = {
        id: 'f3a4b13e112cdd00cc3fc656707c4f5781c8681d',
        uri: site,
        guide: 'WCAG2-AA'
      };
      return wcag(options, function (error, data) {
        if (error) {
          rej(error)
        } else {
          data.site = site;
          res(data);
        }
      });
    });
    
    arr.push(result);
  });
  Promise.all(arr).then((d)=>{
    res.send(d);
  });
});

app.get('/sites/all', (req, res) => {
  res.send(sites);
});

app.post('generate-report', (req, res) => {
  res.send('not yet implemented.');
});

app.listen(3000);