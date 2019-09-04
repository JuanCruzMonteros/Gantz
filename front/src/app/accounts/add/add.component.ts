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

  private titulo:string = "crear Account"
  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
  }

  public create(): void {
    this.accountService.createAccount(this.account).subscribe(
      json => 
      {
        this.router.navigate['/account'];
        swal.fire('La cuenta: @' + json.account.userAcc, 'Cuenta creada con exito','success');
      }
    )
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
