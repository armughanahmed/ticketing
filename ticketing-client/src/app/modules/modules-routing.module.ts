import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules.component';
import { CurrentUserResolver } from './resolvers/current-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { currentUser: CurrentUserResolver },
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
