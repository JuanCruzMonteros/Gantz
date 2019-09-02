import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';

const rutas: Routes = [
  { path: 'account', component: AccountsComponent },
  { path: '',      component: AppComponent },
  { path: '**',      component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
