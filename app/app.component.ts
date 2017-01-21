import { Component } from '@angular/core';
import { CardService } from './app.service';

@Component({
    selector: 'app',
    providers: [CardService],
    template: `
        <h1>{{ Title }}</h1>
        <p *ngFor="let card of CardList">{{ card.Name }}</p>
              `
})
export class AppComponent {

    Title: string = '';
    CardList: string[] = [];
    CardService: any;

    constructor(CardService: CardService) {
        this.Title = 'Magic The Gathering';
        this.CardService = CardService;
        this.getCards();
    }

    getCards() {
        console.log(this.CardService.getCards());
        this.CardService.getCards().then((CardList: any) => this.CardList = CardList.json());
    }

 }
