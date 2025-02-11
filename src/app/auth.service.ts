import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  signup(user: { name: string; email: string; password: string }) {
    const url = `${this.baseUrl}`;
    return this.http.post(url, user);
  }
  login(email: string, password: string) {
    return this.http
      .get<any[]>(this.baseUrl)
      .pipe(
        map((users) =>
          users.some(
            (user) => user.email === email && user.password === password
          )
        )
      );
  }
}
