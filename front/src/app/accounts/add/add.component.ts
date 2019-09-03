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
      response => 
      {
        console.log(this.account)
        this.router.navigate['/accounts']
        swal.fire('Creacion Account' , 'Cuenta creada con exito','success');
      }
    )
  }

  public verifyAccount(): void {
    console.log(this.userPass);
    this.accountService.verifyAccount(this.userPass).subscribe(
      response => {
        console.log(this.userPass)//this.router.navigate['/accounts']
        swal.fire('Validacion Account' , 'Cuenta validada con exito','success');
      }
    )
  }

}
