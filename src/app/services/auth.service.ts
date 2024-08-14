import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/User';
  
  private loggedInUser: User | null = null;

  constructor(private http: HttpClient) {}

  signup(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => users.length > 0 ? users[0] : null),
      tap(user => {
        if (user) {
          this.loggedInUser = user;
          localStorage.setItem('user', JSON.stringify(this.loggedInUser));
        } else {
          this.loggedInUser = null;
        }
      })
    );
  }

  logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem('user');
  }

  get isLoggedIn(): boolean {
    return this.loggedInUser !== null || !!localStorage.getItem('user');
  }
}
