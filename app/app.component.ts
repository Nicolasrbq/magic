import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>{{ Title }}</h1>`
})
export class AppComponent {

    

    constructor() {
        let Title: string = 'Magic The Gathering';
        
    }

 }
