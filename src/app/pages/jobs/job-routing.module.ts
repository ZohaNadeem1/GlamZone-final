import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
      {
        path: '',
        component: JobsComponent
      },
      {
        path: 'details/:id',
        component: JobDetailsComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
