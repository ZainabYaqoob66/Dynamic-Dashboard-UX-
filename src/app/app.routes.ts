import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/login/login.component';
import { NormalCardsComponent } from './features/settings/normal-cards/normal-cards.component';
export const routes: Routes = [
    {
        path: 'login',
        component: NormalCardsComponent,
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'  // This is required to match exactly empty path
    },
    {
        path: '**',
        redirectTo: '',
    }
];
