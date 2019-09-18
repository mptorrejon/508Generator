import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TabsService {
    constructor(private http: HttpClient) {}

    getAllSites() {
        return this.http.get('http://localhost:3000/sites/all');
    }
}