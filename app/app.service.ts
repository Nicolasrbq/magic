import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()


export class CardService {
    RootUrl: string;

    constructor(private http: Http) {
        this.getCards();
        this.RootUrl = 'http://localhost:3002/';

    }

    getCards() {
        return this.http.get('http://localhost:3002/api/getEditions').toPromise();
    }

}