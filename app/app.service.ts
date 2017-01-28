import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()


export class CardService {
    RootUrl: string;

    constructor(private http: Http) {
        this.RootUrl = 'http://localhost:3002/';
    }

    getEditionList() {
        return this.http.get('http://localhost:3002/api/getEditions').toPromise();
    }

    getCardList(editionId: number) {
        console.log(editionId);
        return this.http.get('http://localhost:3002/api/getCards/' + editionId).toPromise();
    }

}
