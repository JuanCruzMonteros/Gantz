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

    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la cuenta ${account.user}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
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
              `Usuario: ${account.user} eliminado con éxito.`,
              'success'
            )
          }
        )
      }
    });
  }

}
