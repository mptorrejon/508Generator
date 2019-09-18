import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorsComponent } from './errors/errors.component';
import { PotentialProblemsComponent } from './potential-problems/potential-problems.component';

const routes: Routes = [
    {
        path: '', 
        component: PotentialProblemsComponent
    },
    {
        path: 'potentialProblems',
        component: ErrorsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const appRoutingModule = RouterModule.forRoot(routes);