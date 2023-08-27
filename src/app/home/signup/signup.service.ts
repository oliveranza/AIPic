import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable, debounceTime, first, map, switchMap } from 'rxjs';
import { User } from 'src/app/core/user/user';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  validateUsername() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap((username) => this.getUser(username)))
        .pipe(map((user) => this.isUsernameTaken(user)))
        .pipe(first());
    };
  }

  private getUser(username: string): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/users?username=' + username);
  }

  private isUsernameTaken(user: User[]) {
    return user.length > 0 ? { usernameTaken: true } : null;
  }
}
