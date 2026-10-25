import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private router: Router) {}

  register(userData: any): Observable<any> {
    const donnees = {
      email: userData.email,
      motDePasse: userData.pass
    };
    return this.http.post(`${this.apiUrl}/register`, donnees, { responseType: 'text' });
  }

  login(credentials: { email: string; pass: string }): Observable<any> {
    const donnees = {
      email: credentials.email,
      motDePasse: credentials.pass
    };
    return this.http.post<any>(`${this.apiUrl}/login`, donnees).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
        if (response && response.id) {
          localStorage.setItem('utilisateurId', String(response.id));
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('utilisateurId');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

export { AuthService };
