import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialProfilesRoutingModule } from './social-profiles-routing.module';
import { SocialProfilesComponent } from './social-profiles.component';



// import { AuthService } from '../usuarios/auth.service';
import { ActivatedRoute } from '@angular/router';
@NgModule({
  declarations: [SocialProfilesComponent],
  imports: [
    CommonModule,
    SocialProfilesRoutingModule
  ]
})
export class SocialProfilesModule {

}
