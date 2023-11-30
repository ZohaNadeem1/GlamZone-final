import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParloursComponent } from './parlours.component';

const routes: Routes = [{
        path: 'parlours',
        component: ParloursComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParlourRoutingModule { }
