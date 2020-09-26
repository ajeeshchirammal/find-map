import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, forkJoin, Subscription, throwError } from 'rxjs';
import { ShareStore } from '../../../app/shared/store/shared-store';
import { Router, ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';


@Injectable({
    providedIn: 'root'
})
export class MapService {
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
    ) {
        this.baseUrl = "https://google-map-server.herokuapp.com/"
    }


    public getMap(param) {

        return this.http.get(this.baseUrl + "nearbysearch?lat=" + param.lat + "&lng=" + param.lng)
            .pipe(
            map(response => this.shareStore.apiResp = response));

    }

    public getPlace(param) {

        return this.http.get(this.baseUrl + "latlngAddress?lat=" + param.lat + "&lng=" + param.lng)
            .pipe(
            map(response => this.shareStore.apiResp = response));

    }


}
