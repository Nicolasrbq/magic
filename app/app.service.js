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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var CardService = (function () {
    function CardService(http) {
        this.http = http;
        this.RootUrl = 'http://localhost:3002/';
    }
    CardService.prototype.getEditionList = function () {
        return this.http.get('http://localhost:3002/api/getEditions').toPromise();
    };
    CardService.prototype.getCardList = function (editionId) {
        console.log(editionId);
        return this.http.get('http://localhost:3002/api/getCards/' + editionId).toPromise();
    };
    return CardService;
}());
CardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=app.service.js.map