import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { iPhoto } from "./iPhoto.interface";

@Injectable({
  providedIn: 'root',
 })
export class PhotoService{

  constructor(private http: HttpClient){}

  listFromUser(username: string):Observable<iPhoto[]> {
    return this.http.get<iPhoto[]>(`http://localhost:3000/photos/${username}`);
  }

}