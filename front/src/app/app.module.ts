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
import { LoginComponent } from './usuarios/login.component';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { sideNavPath, navRoutes } from './nav-routing';
import { NavComponent } from './core/components/nav/nav.component';
import { NavModule } from './core/components/nav/nav.module';

const rutas: Routes = [
  {
    path: sideNavPath,
    component: NavComponent,
    children: navRoutes
  },
  // { path: '**',      component: NotfoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account/page/:page', component: AccountsComponent },
  { path: 'account', component: AccountsComponent },
  { path: 'account/add', component: AddComponent },
  { path: 'account/edit/:id', component: EditComponent },
  { path: '', redirectTo: sideNavPath, pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    NotfoundComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    HeaderComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
