import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/usuarios/auth.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Account } from '../../models/account';
import { SocialProfilesService } from './services/social-profiles.service';

@Component({
  selector: 'app-social-profiles',
  templateUrl: './social-profiles.component.html',
  styleUrls: ['./social-profiles.component.css']
})
export class SocialProfilesComponent implements OnInit {

  tableNormalElements = ['id', 'Cuenta', 'bio', 'foto_bio', 'following', 'followers', 'post', 'observaciones'];
  tableEditElements = ['edit', 'eliminar', 'like', 'comment', 'follow'];

  config = false;

  accounts: Account[];
  paginador: any;
  accountSeleccionado: Account;


  constructor(private socialProfilesService: SocialProfilesService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.socialProfilesService.getAccounts(page)
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

        this.socialProfilesService.delete(account.id).subscribe(
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

  NormalStateColumnsolumn() {
    this.config = !this.config;
  }

}
