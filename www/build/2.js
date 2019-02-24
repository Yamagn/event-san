webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPageModule", function() { return EventDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_detail__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventDetailPageModule = /** @class */ (function () {
    function EventDetailPageModule() {
    }
    EventDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */]),
            ],
        })
    ], EventDetailPageModule);
    return EventDetailPageModule;
}());

//# sourceMappingURL=event-detail.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bookmark_bookmark__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventDetailPage = /** @class */ (function () {
    function EventDetailPage(navCtrl, navParams, eventProvider, toastCtrl, bookmarkProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.toastCtrl = toastCtrl;
        this.bookmarkProvider = bookmarkProvider;
    }
    EventDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EventDetailPage');
        this.event = this.navParams.data.event;
        if (!this.event) {
            this.eventProvider.get(this.navParams.data.eventId).subscribe(function (body) {
                if (body && body.events && body.events.length() > 0)
                    _this.event = body.events[0];
            });
        }
    };
    EventDetailPage.prototype.doBookmark = function () {
        var _this = this;
        this.bookmarkProvider.put(this.event).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'イベントをブックマークしました。',
                duration: 1500
            });
            toast.present();
        });
    };
    EventDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-detail',template:/*ion-inline-start:"/Users/ymgn/ionicDir/event-san/src/pages/event-detail/event-detail.html"*/'<!--\n  Generated template for the EventDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>イベント詳細</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-start (click)="doBookmark()">\n        <ion-icon name="bookmark"></ion-icon>\n        ブックマーク\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ng-container *ngIf="event">\n    <h1><a [href]="event.event_url" target="_blank">{{event.title}}</a></h1>\n    <p>{{event.catch}}</p>\n    <h1 class="event-header">開催場所:</h1>\n    <p>{{event.address}} {{event.place}}</p>\n    <h1 class="event-header">イベント日時:</h1>\n    <p>\n      {{event.started_at | date: \'longDate\'}}{{event.started_at | date: \'shortTime\'}}\n      〜\n      {{event.ended_at | date: \'longDate\'}}{{event.ended_at | date: \'shortTime\'}}\n    </p>\n    <h1 class="event-header">概要:</h1>\n    <div [innerHTML]="event.description"></div>\n  </ng-container>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ymgn/ionicDir/event-san/src/pages/event-detail/event-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_bookmark_bookmark__["a" /* BookmarkProvider */]])
    ], EventDetailPage);
    return EventDetailPage;
}());

//# sourceMappingURL=event-detail.js.map

/***/ })

});
//# sourceMappingURL=2.js.map