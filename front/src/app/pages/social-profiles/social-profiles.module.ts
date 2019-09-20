import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialProfilesRoutingModule } from './social-profiles-routing.module';
import { SocialProfilesComponent } from './social-profiles.component';

import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';


import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@NgModule({
  declarations: [
    SocialProfilesComponent,
    AddComponent,
    EditComponent],
  imports: [
    CommonModule,
    SocialProfilesRoutingModule,
    FormsModule
  ]
})
export class SocialProfilesModule {

}
