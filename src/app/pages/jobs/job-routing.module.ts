import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobManagementComponent } from './job-management/job-management.component';

const routes: Routes = [
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'job-details/:jobId',
        component: JobDetailsComponent
      },
      {
        path: 'job-management',
        component: JobManagementComponent,
        // canActivate: [true]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
