import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-potential-problems',
  templateUrl: './potential-problems.component.html',
  styleUrls: ['./potential-problems.component.css']
})
export class PotentialProblemsComponent implements OnInit {

  status: string;
  errors: Array<{}>;
  potentialProblemas: Array<{}>;
  data;
  isVisible: boolean;
  isReportReady:boolean;
  constructor( private service:AppService ){
    this.isReportReady = false;
  }
  ngOnInit() {
  }
  generateReport() {
    this.service.generateReport().subscribe( (d: any) =>{
      this.isReportReady = true;
      console.log(d);
      this.data = d;
      // this.status = d.status;
      // this.errors = d.errors;
      // this.potentialProblemas = d.potentialProblemas;
      console.log(d);
      // d.errors.map( c => {
      //   c.isVisible = false;
      // })
    });
  }
  showSolution(card) {
    card.isVisible = !card.isVisible;
  }
  title = 'ui';
}
