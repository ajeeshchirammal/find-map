import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, forkJoin, Subscription, throwError } from 'rxjs';
import { ShareStore } from '../store/shared-store';
// import { config } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
// import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';


@Injectable({
    providedIn: 'root'
})
export class ShareService {
    public idleScreenFlag: boolean = false;
    public subscription: Subscription;
    public toastTimer: any;
    baseUrl: any

    constructor(
        private location: Location,
        public http: HttpClient,
        public shareStore: ShareStore,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        // private idle: Idle
    ) {
        this.baseUrl = "https://google-map-server.herokuapp.com/"
    }

    /* api method for creating leads https://cors-anywhere.herokuapp.com/*/
    public getPlace(param) {
        return this.http.get(this.baseUrl + "autocomplete?input=" + param)
            .pipe(map(response => this.shareStore.apiResp = response));
    }


    public getLatLong(param) {

        return this.http.get(this.baseUrl + "address?input=" + param)
            .pipe(map(response => this.shareStore.apiResp = response));
    }












}
