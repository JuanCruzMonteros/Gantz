import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { Userpass } from '../models/Userpass';
import { AccountService } from '../account.service';

import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {


  private account: Account = new Account();
  private userPass: Userpass = new Userpass();


  errores: string[];

  private titulo:string = "crear Account"
  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
  }

  public create(): void {
    console.log(this.account);
    this.accountService.createAccount(this.account)
      .subscribe(
        cliente => {
          this.router.navigate(['/account']);
          swal.fire('Nueva Cuenta', `La cuenta ${this.account.userAcc} ha sido agregada con existo con éxito`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

  public verifyAccount(): void {
    console.log(this.userPass);
    this.accountService.verifyAccount(this.userPass).subscribe(
      json => {
        swal.fire('Verificacion: ' , json.mensaje ,'success');
        this.account = json.account;
      }
    )
    
  }

}
