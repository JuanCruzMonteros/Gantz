import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from '../models/account';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  private account: Account = new Account();
  private titulo = "Editar Account";

  constructor(private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarAccount()
  }

  cargarAccount(): void{
    this.activatedRoute.params.subscribe( 
      params =>
      {
        let id = params['id']
        if(id){
          this.accountService.getAccount(id).subscribe( 
              account => 
              {
                this.router.navigate['accounts']
                this.account = account
              }
          )}
      })
  }

  update():void {
    this.accountService.update(this.account).subscribe( account =>
      {
        this.router.navigate['accounts']
<<<<<<< HEAD
        Swal.fire('Account actualizada', 'Cuenta ' + this.account.userAcc + ' actualizada con exito!', 'success')
=======
        Swal.fire('Account actualizada', 'Cuenta ' + this.account.user + ' actualizada con exito!', 'success')
>>>>>>> 9994eba8e254b6bb0efe88d663d7c79e0d8257fb
      });
  }
}
