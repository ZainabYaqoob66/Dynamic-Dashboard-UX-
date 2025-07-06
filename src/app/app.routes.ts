import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/login/login.component';
import { NormalCardsComponent } from './features/settings/normal-cards/normal-cards.component';
import { GraphicalCardsComponent } from './features/settings/graphical-cards/graphical-cards.component';
import { TableCardsComponent } from './features/settings/table-cards/table-cards.component';
export const routes: Routes = [
    {
        path: 'login',
        component: TableCardsComponent,
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
