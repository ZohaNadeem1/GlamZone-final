import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobManagementComponent } from './job-management/job-management.component';

const routes: Routes = [
      {
        path: '',
        component: JobsComponent
      },
      {
        path: 'details/:id',
        component: JobDetailsComponent
      },
      {
        path: 'management',
        component: JobManagementComponent,
        // canActivate: [true]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
