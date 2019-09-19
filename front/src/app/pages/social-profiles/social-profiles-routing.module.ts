import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialProfilesComponent } from './social-profiles.component';


const routes: Routes = [
  {
    path: '',
    data: { shouldReuse: true, key: 'sp' },
    component: SocialProfilesComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialProfilesRoutingModule { }
