import { Injectable } from '@angular/core';

import { Account } from '../accounts/models/account';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private urlEndPoint: string = 'http://localhost:8080/api/accounts';

  //private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Account[])
    );
  }
}
