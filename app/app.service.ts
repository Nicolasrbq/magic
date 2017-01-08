import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class CardService {

    constructor(private http: Http) {

    }

    getCards() {
        return this.http.get('/api/').toPromise();
    }

}