import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAccountRoutingModule } from './add-account-routing.module';
import { Router } from '@angular/router';
import { SocialProfilesService } from '../social-profiles/services/social-profiles.service';
import { Userpass } from 'src/app/models/userPass';
import { Account } from 'src/app/models/account';
import swal from 'sweetalert2';

import { AddAccountComponent } from './add-account.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AddAccountComponent],
  imports: [
    CommonModule,
    AddAccountRoutingModule,
    FormsModule
  ]
})
export class AddAccountModule {
 }
