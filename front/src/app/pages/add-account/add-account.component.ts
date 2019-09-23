import { Component, OnInit } from '@angular/core';

import { Userpass } from 'src/app/models/Userpass';
import { Account } from 'src/app/models/account';

import { SocialProfilesService } from '../social-profiles/services/social-profiles.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  pathRedirect = '/nav/sp';

  verificado = false;
  private account: Account;
  private userPass: Userpass;

  errores: string[];

  private titulo = 'crear Account';

  constructor(private socialProfilesService: SocialProfilesService,
              private router: Router) { }

  ngOnInit() {
    this.account = new Account();
    this.userPass = new Userpass();
  }

  public create(): void {
    console.log(this.account);
    this.socialProfilesService.createAccount(this.account)
      .subscribe(
        cliente => {
          this.router.navigate([this.pathRedirect]);
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
    this.socialProfilesService.verifyAccount(this.userPass).subscribe(
      json => {
        swal.fire('Verificacion: ' , json.mensaje , 'success');
        this.account = json.account;
        this.verificado = true;
      }
    );
  }

}
