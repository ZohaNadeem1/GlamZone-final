import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobRoutingModule } from './job-routing.module';
import { JobSideFilterComponent } from 'src/app/components/job-side-filter/job-side-filter.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobsPopUpComponent } from 'src/app/components/jobs-pop-up/jobs-pop-up.component';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  imports: [ 
    CommonModule,
    JobRoutingModule,
    FieldsetModule,
    InputTextModule,
    ChipsModule,
    KeyFilterModule,
    ButtonModule,
    FileUploadModule
  ],
  declarations: [JobsComponent, JobSideFilterComponent, JobCardComponent, JobsPopUpComponent]
})
export class JobsModule { }
