import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8086';
  private token: string | null = null;


  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('token');
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }

    return headers;
  }

  login(email: string, password: string): Observable<boolean> {
    const body = { email, password };

    return this.http.post<{accessToken: string, message: string,id:string}>(`${this.baseUrl}/user/login`, body, { headers: this.getHeaders() }).pipe(
      map(response => {
        this.token = response.accessToken;
        localStorage.setItem('token', this.token);
        localStorage.setItem('userId', response.id);
        this.redirectToRolePage(response.message);
        alert(response.message);
        return true;
      }),
      catchError(error => {
        console.error(error);
        return throwError(error);
      })
    );
  }



  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

  }

  isLoggedIn(): boolean {
    return this.token != null;
  }

  redirectToRolePage(role: string): void {
    if (role === "Admin authenticated") {
      this.router.navigate(['/admin']);
    } else if (role === "Innovator authenticated") {
      this.router.navigate(['/innovator']);
    } else if (role === "Investor authenticated") {
      this.router.navigate(['/investor']);
    } else {
      this.router.navigate(['/home']);
      console.error("Invalid role:", role);
    }
  }




}
