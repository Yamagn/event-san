webpackJsonp([3],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPageModule", function() { return BookmarkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookmark__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookmarkPageModule = /** @class */ (function () {
    function BookmarkPageModule() {
    }
    BookmarkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bookmark__["a" /* BookmarkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookmark__["a" /* BookmarkPage */]),
            ],
        })
    ], BookmarkPageModule);
    return BookmarkPageModule;
}());

//# sourceMappingURL=bookmark.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bookmark_bookmark__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookmarkPage = /** @class */ (function () {
    function BookmarkPage(navCtrl, navParams, toastCtrl, bookmarkProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.bookmarkProvider = bookmarkProvider;
        this.events = [];
    }
    BookmarkPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter BookmarkPage');
        this.bookmarkProvider.get().then(function (events) {
            _this.events = _this.toEventArray(events);
        });
    };
    BookmarkPage.prototype.toEventArray = function (events) {
        var eventArray = [];
        Object.keys(events).forEach(function (key) {
            eventArray.push(events[key]);
        });
        eventArray.sort(function (ev1, ev2) {
            var ret = ev2.started_at.localeCompare(ev1.started_at);
            if (ret !== 0)
                return ret;
            return ev2.event_id - ev1.event_id;
        });
        return eventArray;
    };
    BookmarkPage.prototype.openEvent = function (event) {
        this.navCtrl.push('EventDetailPage', {
            eventId: event.event_id,
            event: event
        });
    };
    BookmarkPage.prototype.doDelete = function (event, itemSliding) {
        var _this = this;
        this.bookmarkProvider.delete(event).then(function (events) {
            _this.events = _this.toEventArray(events);
            var toast = _this.toastCtrl.create({
                message: 'ブックマークを削除しました。',
                duration: 1500
            });
            toast.present();
        });
        itemSliding.close();
    };
    BookmarkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookmarkPage');
    };
    BookmarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookmark',template:/*ion-inline-start:"/Users/ymgn/ionicDir/event-san/src/pages/bookmark/bookmark.html"*/'<!--\n  Generated template for the BookmarkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="bookmark">\n    <ion-title>ブックマーク</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding #itemSliding *ngFor="let event of events">\n      <button ion-item (click)="openEvent(event)">\n        <h2>{{event.title}}</h2>\n        <h3>{{event.catch}}</h3>\n        <h4>開催場所:</h4>\n        <p>{{event.started_at | date: \'longDate\'}}{{event.started_at | date: \'shortTime\'}}\n          〜\n          {{event.ended_at | date: \'longDate\'}}{{event.ended_at | date: \'shortTime\'}}\n        </p>\n      </button>\n      <ion-item-options slide="right">\n        <button ion-button color="danger" icon-start (click)="doDelete(event, itemSliding)">\n          <ion-icon name="trash"></ion-icon>\n          削除\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ymgn/ionicDir/event-san/src/pages/bookmark/bookmark.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_bookmark_bookmark__["a" /* BookmarkProvider */]])
    ], BookmarkPage);
    return BookmarkPage;
}());

//# sourceMappingURL=bookmark.js.map

/***/ })

});
//# sourceMappingURL=3.js.map