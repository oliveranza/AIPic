import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { iPhoto } from './iPhoto.interface';

@Injectable({
    providedIn: 'root',
})
export class PhotoService {
    private baseUrl: string;
    private endpoint: string;

    constructor(private http: HttpClient) {
        this.baseUrl = 'http://localhost:3000/';
        this.endpoint = '/photos';
    }

    listFromUser(username: string): Observable<iPhoto[]> {
        return this.http.get<iPhoto[]>(this.baseUrl + username + this.endpoint);
    }

    listFromUserPaginatate(username: string, page: number): Observable<iPhoto[]> {
        const params = new HttpParams().append('page', page);
        return this.http.get<iPhoto[]>(this.baseUrl + username + this.endpoint, { params });
    }
}
