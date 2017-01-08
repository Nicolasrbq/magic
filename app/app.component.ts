import { Component } from '@angular/core';
import { CardService } from './app.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app',
    template: `
        <h1>{{ Title }}</h1>
        {{ CardList }}
              `
})
export class AppComponent {

    Title: string = '';
    CardList: string[] = [];
    CardService: CardService;

    constructor() {
        this.Title = 'Magic The Gathering';

    }

    getCards() {
        this.CardService.getCards().then(cards => this.CardList);
    }

 }
