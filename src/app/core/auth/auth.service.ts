import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  private generateAccessTokenMock(user: User) {
    const secretKey = '123';
    const header = { alg: 'HS256', typ: 'JWT' };

    const base64Encode = (input) => {
      return input
        .replace('/+/g', '-')
        .replace('///g', '_')
        .replace('/=+$/', '');
    };
    const headerBase64 = btoa(base64Encode(JSON.stringify(header)));
    const payloadBase64 = btoa(
      base64Encode(
        JSON.stringify(user)
        // JSON.stringify(`{"id": "${user.id}", "nome": "${user.nome}", "email": "${user.email}"}`)
      )
    );
    const signature = `${headerBase64}.${payloadBase64}`;
    const hmac = btoa(signature + secretKey);

    return `${headerBase64}.${payloadBase64}.${hmac}`;
  }

  authenticate(userName: string, password: string) {
    return this.http
      .get(API_URL + `/user/login/${userName}/${password}`, {
        observe: 'response',
      })
      .pipe(
        map((res) => {
          if ((res.body as any[]).length === 0) {
            throw new HttpErrorResponse({
              error: 'Invalid username or password',
              status: 404,
              statusText: 'Not found',
            });
          } else {
            const body = res.body[0] as User;
            this.userService.setToken(this.generateAccessTokenMock(body));
            return res;
          }

          //   let authToken = res.headers.get('x-access-token');
          //   authToken
          //     ? ''
          //     : (authToken = this.generateAccessTokenMock(
          //         userName,
          //         password
          //       ));
        })
      );
  }
}
