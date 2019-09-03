import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddComponent } from './accounts/add/add.component';
import { EditComponent } from './accounts/edit/edit.component';

import { FormsModule } from '@angular/forms';
const rutas: Routes = [
  { path: '',      component: AppComponent },
  //{ path: '**',      component: NotfoundComponent },
  { path: 'account', component: AccountsComponent },
  { path: 'account/add', component: AddComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    NotfoundComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
