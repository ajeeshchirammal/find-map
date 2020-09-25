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

    constructor(
        private location: Location,
        public http: HttpClient,
        public shareStore: ShareStore,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        // private idle: Idle
    ) { }

    /* api method for creating leads*/
    public getPlace(param) {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + param + '&types=geocode&language=fr&key=AIzaSyBepSqGpxHGCUDJvHf_f9dX99Af2Id75zw')
            .pipe(map(response => this.shareStore.apiResp = response));
    }


    public getLatLong(param) {

        return this.http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=' + param + '&key=AIzaSyBepSqGpxHGCUDJvHf_f9dX99Af2Id75zw')
            .pipe(map(response => this.shareStore.apiResp = response));
    }












}
