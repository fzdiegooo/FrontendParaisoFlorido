import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LOGIN_URL = environment.apiUrl+"/api/auth/login";
  private tokenKey = 'authToken';
  constructor(private httpcliente: HttpClient, private router: Router) { }
  
  login(correo: string, password: string): Observable<any>{
    return this.httpcliente.post<any>(this.LOGIN_URL,{correo,password}).pipe(
      tap(response =>{
        if(response.token){
          console.log(response.token);
          this.setToken(response.token)
        }
      })
    )
  }

  private setToken(token: string): void{
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null{
      return localStorage.getItem(this.tokenKey)
  }

  isAuthenticated(): boolean{
    const token = this.getToken();
    if(!token) return false;
    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp * 1000
    return Date.now() < exp
  }

  logout(): void{
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(["/login"])
  }
}
