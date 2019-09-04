import { Injectable } from '@angular/core';

import { Account } from '../accounts/models/account';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userpass } from './models/userPass';
import { Router } from '@angular/router';

import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private urlEndPoint: string = 'http://localhost:8080/api/accounts';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

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
    return this.http.post<any>(this.urlEndPoint, account, {headers: this.httpHeaders }).pipe(
      catchError( e => {
        swal.fire(e.error.mensaje ,e.error.error,'error');
        return throwError(e);
      })
    );
  }

  verifyAccount(userPass: Userpass): Observable<any>  {
    return this.http.post<Userpass>(this.urlEndPoint + '/verify', userPass, {headers: this.httpHeaders }).pipe(
      catchError( e => {
        swal.fire(e.error.mensaje ,e.error.error,'error');
        return throwError(e);
      })
    );
  }

  update(account: Account):Observable<Account> {
    return this.http.put<Account>(this.urlEndPoint + '/' + account.id, account, {headers: this.httpHeaders }).pipe(
      catchError( e => {
        swal.fire(e.error.mensaje ,e.error.error,'error');
        return throwError(e);
      })
    ); 
  }

  delete(id: number):Observable<Account> {
    return this.http.delete<Account>(this.urlEndPoint + '/' + id, {headers: this.httpHeaders }).pipe(
      catchError( e => {
        swal.fire(e.error.mensaje ,e.error.error,'error');
        return throwError(e);
      })
    );
  }
}
