import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from '../accounts/models/account';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {

  config: 0;
  accounts: Account[];
  paginador: any;
  accountSeleccionado: Account;

  constructor(private accountService: AccountService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.accountService.getAccounts(page)
        .pipe().subscribe(response => {
          this.accounts = response.content as Account[];
          this.paginador = response;
        });
    });
  }

  delete(account: Account): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la cuenta @${account.userAcc}?`,
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
            // filtro para que no muestre el usuarios que acabo de eliminar
            this.accounts = this.accounts.filter(user => user !== account);
            swal.fire(
              'Usuario Eliminado!',
              `Usuario: @${account.userAcc} eliminado con éxito.`,
              'success'
            );
          }
        );
      }
    });
  }

}
