import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParloursComponent } from './parlours.component';
import { ParlourDetailsComponent } from './parlour-details/parlour-details.component';
import { ParlourManagementComponent } from './parlour-management/parlour-management.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FormsModule } from '@angular/forms';
import {  ParloursResolver } from 'src/app/resolver/parlours.resolver';
import { ParloursDetailsResolver } from 'src/app/resolver/parlours.details.resolver';

const routes: Routes = [
                          {
                            path: '',
                            component: ParloursComponent,
                            resolve: {
                                 parlours : ParloursResolver
                            }
                          },
                          {
                            path: 'details/:id',
                            component: ParlourDetailsComponent,
                            resolve : {
                                parlourDetails: ParloursDetailsResolver
                            }
                          },
                          {
                            path: 'management',
                            component: ParlourManagementComponent,
                            // canActivate: []
                          },
                          {
                            path: 'bookings',
                            component: BookingsComponent,
                            // canActivate: []
                          }
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParlourRoutingModule { }
