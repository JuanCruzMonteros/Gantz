import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { Account } from './../../../models/account';
import { Userpass } from './../../../models/Userpass';

// import { AuthService } from '../usuarios/auth.service';
import { AuthService } from './../../../usuarios/auth.service';
@Injectable({
  providedIn: 'root'
})
export class SocialProfilesService {

  private urlEndPoint = 'http://localhost:8080/api/accounts';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router,
              private authService: AuthService) { }

  private agregarAuthorizationHeader() {
    const token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  private isNoAutorizado(e): boolean {
    if (e.status === 401) {

      if (this.authService.isAuthenticated()) {
        this.authService.logout();
      }
      this.router.navigate(['/login']);
      return true;
    }

    if (e.status === 403) {
      swal.fire('Acceso denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso!`, 'warning');
      this.router.navigate(['/account']);
      return true;
    }
    return false;
  }
  /*
  getAccounts(): Observable<Account[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Account[])
    );
  }

  getAccount(id): Observable<Account> {
    return this.http.get<Account>(this.urlEndPoint + '/' + id).pipe(
      catchError( e => {
        this.router.navigate(['/accounts'])
        swal.fire('Error al obtener Account' ,e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  createAccount(account: Account): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, account, {headers: this.agregarAuthorizationHeader() }).pipe(
      catchError( e => {
        swal.fire(e.error.mensaje ,e.error.error,'error');
        return throwError(e);
      })
    );
  }*/

  verifyAccount(userPass: Userpass): Observable<any> {
    return this.http.post<Userpass>(this.urlEndPoint + '/verify', userPass, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  update(account: Account): Observable<Account> {
    return this.http.put<Account>(this.urlEndPoint + '/' + account.id, account, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<Account> {
    return this.http.delete<Account>(this.urlEndPoint + '/' + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getAccounts(page: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((response: any) => {
        (response.content as Account[]).map(account => {
          account.userAcc = account.userAcc.toUpperCase();
          return account;
        });
        return response;
      })
    );
  }

  createAccount(account: Account): Observable<any> {
    return this.http.post(this.urlEndPoint, account, { headers: this.agregarAuthorizationHeader() })
      .pipe(
        map((response: any) => response.account as Account),
        catchError(e => {
          if (this.isNoAutorizado(e)) {
            return throwError(e);
          }

          if (e.status === 400) {
            return throwError(e);
          }

          console.error(e.error.mensaje);
          swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
  }


  getAccount(id): Observable<Account> {
    return this.http.get<Account>(`${this.urlEndPoint}/${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        this.router.navigate(['/account']);
        console.error(e.error.mensaje);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
}

