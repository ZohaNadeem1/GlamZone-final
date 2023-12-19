import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { JobsResolver } from 'src/app/resolver/jobs.resolver';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditParlourComponent } from './edit-parlour/edit-parlour.component';


const routes: Routes = [
            {
              path: '',
              component: ProfileComponent,
              children: [
                      {
                        path: '',
                        component: ProfileInfoComponent
                      },
                    {
                      path: 'view',
                      component: ViewProfileComponent
                    },
                    {
                      path: 'edit/:id',
                      component: EditProfileComponent
                    },
                    {
                      path: 'jobs',
                      component: JobsComponent,
                      resolve: {
                           jobsData : JobsResolver
                      }
                    },
                    {
                      path: 'services',
                      component: ServicesComponent
                    },
                    {
                      path: 'parlour/edit/:id',
                      component: EditParlourComponent
                    }
              ],
              resolve: {
                
              }
            }
];


@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProfileRoutingModule { }
