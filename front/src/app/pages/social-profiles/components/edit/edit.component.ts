import { Component, OnInit } from '@angular/core';
import { SocialProfilesService } from '../../services/social-profiles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from '../../../../models/account';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  pathRedirect = '/nav/sp';

  private account: Account = new Account();
  private titulo = 'Editar Account';

  constructor(private socialProfilesService: SocialProfilesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarAccount();
  }

  cargarAccount(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params.id;
        if (id) {
          this.socialProfilesService.getAccount(id).subscribe(
              account => {
                this.account = account;
              }
          ); }
      });
  }

  update(): void {
    this.socialProfilesService.update(this.account).subscribe( account => {
      this.router.navigate([this.pathRedirect]);
        Swal.fire('Account actualizada', 'Cuenta ' + this.account.userAcc + ' actualizada con exito!', 'success');
      });
  }
}
