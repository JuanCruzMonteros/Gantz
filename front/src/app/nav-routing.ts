import { Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';

export interface NavRoute extends Route {
    path?: string;
    icon?: string;
    group?: string;
    groupedNavRoutes?: NavRoute[];
}

export const sideNavPath = 'nav';

export const navRoutes: NavRoute[] = [
    /*
    {
        data: { title: 'Dashboard' }, // titulo sidebar
        icon: 'dashboard', // icono
        path: 'dashboard', // ruta de navegacion
        loadChildren: () =>
            import('./pages/dashboard/dashboard.module').then(
                m => m.DashboardModule,
            ),
    },*/
    {
        data: { title: 'Add Acount' }, // titulo sidebar
        icon: 'person_add', // icono
        path: 'addAcount', // ruta de navegacion
        loadChildren: () =>
            import('./pages/add-account/add-account.module').then(
                m => m.AddAccountModule,
            ),
    },
    {
        data: { title: 'Social Profiles' },
        icon: 'account_box',
        path: 'sp',
        loadChildren: () =>
            import('./pages/social-profiles/social-profiles.module').then(
                m => m.SocialProfilesModule,
            ),
    },
    {
        path: '',
        redirectTo: 'sp',
        pathMatch: 'full',
    },
];

@Injectable({
    providedIn: 'root',
})
export class NavRouteService {
    navRoute: Route;
    navRoutes: NavRoute[];

    constructor(router: Router) {
        this.navRoute = router.config.find(route => route.path === sideNavPath);
        this.navRoutes = this.navRoute.children
            .filter(route => route.data && route.data.title)
            .reduce((groupedList: NavRoute[], route: NavRoute) => {
                if (route.group) {
                    const group: NavRoute = groupedList.find(navRoute => {
                        return (
                            navRoute.group === route.group &&
                            navRoute.groupedNavRoutes !== undefined
                        );
                    });
                    if (group) {
                        group.groupedNavRoutes.push(route);
                    } else {
                        groupedList.push({
                            group: route.group,
                            groupedNavRoutes: [route],
                        });
                    }
                } else {
                    groupedList.push(route);
                }
                return groupedList;
            }, []);
    }

    public getNavRoutes(): NavRoute[] {
        return this.navRoutes;
    }
}
