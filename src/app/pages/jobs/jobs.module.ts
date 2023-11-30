import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobRoutingModule } from './job-routing.module';

@NgModule({
  imports: [
    CommonModule,
    JobRoutingModule
  ],
  declarations: [JobsComponent]
})
export class JobsModule { }
