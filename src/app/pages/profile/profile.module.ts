import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileSideComponent } from 'src/app/components/profile-side/profile-side.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { JobsComponent } from './jobs/jobs.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { ServicesComponent } from './services/services.component';
import { DialogModule } from 'primeng/dialog';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChartModule } from 'primeng/chart';
import { DashboardPieChartComponent } from 'src/app/components/dashboard-pie-chart/dashboard-pie-chart.component';
import { DashboardMultiAxisComponent } from 'src/app/components/dashboard-multi-axis/dashboard-multi-axis.component';
import { DashboardPolarComponent } from 'src/app/components/dashboard-polar/dashboard-polar.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationComponent } from 'src/app/components/confirmation/confirmation.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ParloursModule } from '../parlours/parlours.module';
import { TagModule } from 'primeng/tag';
import { JobsResolver } from 'src/app/resolver/jobs.resolver';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PanelMenuModule,
    TableModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    AvatarGroupModule,
    ChartModule,
    ToastModule,
    ConfirmDialogModule,
    ParloursModule,
    TagModule
  ],
  declarations: [ProfileComponent,ProfileInfoComponent, ProfileSideComponent, ServicesComponent, 
                 JobsComponent, TableComponent, DialogBoxComponent, DashboardPieChartComponent, DashboardMultiAxisComponent,
                 DashboardPolarComponent, ConfirmationComponent],
  providers:    [ConfirmationService, MessageService, JobsResolver]

})
export class ProfileModule { }
