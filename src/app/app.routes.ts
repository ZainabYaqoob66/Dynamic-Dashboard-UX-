import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/login/login.component';
import { NormalCardsComponent } from './features/settings/normal-cards/normal-cards.component';
import { GraphicalCardsComponent } from './features/settings/graphical-cards/graphical-cards.component';
import { TableCardsComponent } from './features/settings/table-cards/table-cards.component';
import { LayoutComponent } from './features/full-layout/layout/layout.component';
import { NavBarComponent } from './features/full-layout/nav-bar/nav-bar.component';
import { RegisterComponent } from './features/authentication/register/register.component';
export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
    }
];
