import { Component, OnInit } from '@angular/core';
import {
    NavigationService,
    Page,
} from '../../services/navigation/navigation.service';
import { NavRoute } from '../../../nav-routing';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/usuarios/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    isOpen = true;

    constructor(
        private navigationService: NavigationService,
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit() {}

    public toggleSideNav() {
        this.isOpen = !this.isOpen;
    }

    public getNavigationItems(): NavRoute[] {
        return this.navigationService.getNavigationItems();
    }

    public getActivePage(): Page {
        return this.navigationService.getActivePage();
    }
/*
    public logout() {
        // this.authService.logout();
        this.router.navigate(['login'], { replaceUrl: true });
    }
*/
    public logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
      }

    public getPreviousUrl(): string[] {
        return this.navigationService.getPreviousUrl();
    }
}
