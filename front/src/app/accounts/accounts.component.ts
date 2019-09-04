import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from '../accounts/models/account';
import swal from 'sweetalert2';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) { }


  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      accounts =>{
        this.accounts = accounts
        console.log(accounts);
      } 
    );
    
  }

  delete(account: Account): void {
<<<<<<< HEAD
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la cuenta @${account.userAcc}?`,
=======

    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la cuenta ${account.user}?`,
>>>>>>> 9994eba8e254b6bb0efe88d663d7c79e0d8257fb
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
<<<<<<< HEAD
      cancelButtonText: 'No, cancelar!',  
=======
      cancelButtonText: 'No, cancelar!',
>>>>>>> 9994eba8e254b6bb0efe88d663d7c79e0d8257fb
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.accountService.delete(account.id).subscribe(
          response => {
            //filtro para que no muestre el usuarios que acabo de eliminar
            this.accounts  = this.accounts.filter(user => user !== account)
            swal.fire(
              'Usuario Eliminado!',
<<<<<<< HEAD
              `Usuario: @${account.userAcc} eliminado con éxito.`,
=======
              `Usuario: ${account.user} eliminado con éxito.`,
>>>>>>> 9994eba8e254b6bb0efe88d663d7c79e0d8257fb
              'success'
            )
          }
        )
      }
    });
  }

}
