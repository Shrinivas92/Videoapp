import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable() 

export class HttpProvider {
    baseUrl: string = 'https://murmuring-harbor-47577.herokuapp.com'

    constructor(public http: HttpClient) {

    }
    register(data: any) {
        return this.http.post(this.baseUrl + '/api/users/register', data, {observe: 'response'});
    }
    login(data: any) {
        return this.http.post(this.baseUrl + '/api/users/login', data, {observe: 'response'});
    }    
    addVideo(data: any) {
        return this.http.post(this.baseUrl+ '/api/videos', data, {observe: 'response'})
    }
    getVideo(data: any) {
        return this.http.get(this.baseUrl+ '/api/videos', data)
    }
    
}