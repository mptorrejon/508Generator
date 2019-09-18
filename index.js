const wcag = require('wcag');
const express = require('express');
const app = express();

const options = {
  id: 'f3a4b13e112cdd00cc3fc656707c4f5781c8681d',
  uri: 'https://fedsim.gsa.gov/',
  guide: 'WCAG2-AA'
};

app.get('/generate-report', (req, res) => {
  wcag(options, function (error, data) {
    console.log('Raw report ready');
    if (error) {
      console.error(error);
    } else {
      // console.log(JSON.stringify(data));
      res.send(JSON.stringify(data));
    }
  });
});




 


app.listen(3000);