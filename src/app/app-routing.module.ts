import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'jobs',
          loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule)
        },
        {
          path: 'parlours',
          loadChildren: () => import('./pages/parlours/parlours.module').then(m => m.ParloursModule)
        },
        {
          path: 'authentication',
          loadChildren: () => import('./authentication/Authentication.module').then(m => m.AuthenticationModule)
        },
        {
          path: '**',
          component: ErrorComponent,
          pathMatch:'full'
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
