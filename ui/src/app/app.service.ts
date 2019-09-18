import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor( private http:HttpClient){}
    generateReport() {
        // return this.http.get('http://localhost:3000/generate-report');
        return  this.http.get('./assets/report.mock.json');
    }
}