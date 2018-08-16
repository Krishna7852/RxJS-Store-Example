import { Routes } from '@angular/router';
import { DashboardComponent } from './auth/components/dashboard/dashboard.component';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
export const appRoutes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginFormComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // { path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // }
  // { path: '**', component: PageNotFoundComponent }
];

