import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './usuarios/login.component';
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
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: sideNavPath, pathMatch: 'full' }
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**',      component: NotfoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    PaginatorComponent
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
