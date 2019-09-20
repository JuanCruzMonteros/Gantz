import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialProfilesComponent } from './social-profiles.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    data: { shouldReuse: true, key: 'sp' },
    component: SocialProfilesComponent,
  },
  {
    path: 'add',
    data: { shouldReuse: true, key: 'add' },
    component: AddComponent,
  },
  {
    path: 'edit/:id',
    data: { shouldReuse: true, key: 'add' },
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialProfilesRoutingModule { }
