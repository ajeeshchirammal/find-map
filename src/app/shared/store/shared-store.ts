import { Injectable } from '@angular/core';
import { observable, action } from "mobx-angular";



@Injectable({
    providedIn: 'root'
})
export class ShareStore {
    @observable apiResp: any;

    @observable location: any;


    constructor() { }

    /* method for sign up popup otp creation */
    @action locationMethod() {
        this.location = this.apiResp;
    }

}
