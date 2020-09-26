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

    constructor(
        private location: Location,
        public http: HttpClient,
        public shareStore: ShareStore,
        public router: Router,
        public activatedRoute: ActivatedRoute,
    ) { }


    public getMap(param) {

        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + param.lat + ',' + param.lng + '&radius=1000&types=atm&&key=AIzaSyBepSqGpxHGCUDJvHf_f9dX99Af2Id75zw')
            .pipe(
            map(response => this.shareStore.apiResp = response));

    }

    public getPlace(param) {

        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + param.lat + ',' + param.lng + '&sensor=true&key=AIzaSyBepSqGpxHGCUDJvHf_f9dX99Af2Id75zw')
            .pipe(
            map(response => this.shareStore.apiResp = response));

    }


}
