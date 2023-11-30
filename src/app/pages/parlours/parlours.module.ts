import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParloursComponent } from './parlours.component';
import { ParlourRoutingModule } from './parlour-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ParlourRoutingModule
  ],
  declarations: [ParloursComponent]
})
export class ParloursModule { }
