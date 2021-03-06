"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var AppComponent = (function () {
    function AppComponent(CardService) {
        this.Title = '';
        this.EditionList = [];
        this.CardList = [];
        this.Title = 'Magic The Gathering';
        this.CardService = CardService;
        this.getEditionList();
    }
    AppComponent.prototype.getEditionList = function () {
        var _this = this;
        this.CardService.getEditionList().then(function (EditionList) { return _this.EditionList = EditionList.json(); });
    };
    AppComponent.prototype.getCardList = function (EditionId) {
        var _this = this;
        this.CardService.getCardList(EditionId).then(function (CardList) { return _this.CardList = CardList.json(); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        providers: [app_service_1.CardService],
        template: "\n        <h1>{{ Title }}</h1>\n        <ul>\n            <li *ngFor=\"let edition of EditionList\" (click)=\"getCardList(edition.Id)\">\n                <span>{{ edition.name }}</span>\n            </li>\n        </ul>\n        <div *ngFor=\"let card of CardList\">{{ card.name }}</div>\n              "
    }),
    __metadata("design:paramtypes", [app_service_1.CardService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map