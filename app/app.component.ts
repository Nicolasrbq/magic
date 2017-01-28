import { Component } from '@angular/core';
import { CardService } from './app.service';

@Component({
    selector: 'app',
    providers: [CardService],
    template: `
        <h1>{{ Title }}</h1>
        <ul>
            <li *ngFor="let edition of EditionList" (click)="getCardList(edition.Id)">
                <span>{{ edition.Name }}</span>
            </li>
        </ul>
        <div *ngFor="let card of CardList">{{ card.Name }}</div>
              `
})
export class AppComponent {

    Title = '';
    EditionList: string[] = [];
    CardList: string[] = [];
    CardService: any;

    constructor(CardService: CardService) {
        this.Title = 'Magic The Gathering';
        this.CardService = CardService;
        this.getEditionList();
    }

    getEditionList() {
        this.CardService.getEditionList().then((EditionList: any) => this.EditionList = EditionList.json());
    }

    getCardList(EditionId: number) {
        this.CardService.getCardList(EditionId).then((CardList: any) => this.CardList = CardList.json());
    }

 }
