import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParloursComponent } from './parlours.component';
import { ParlourRoutingModule } from './parlour-routing.module';
import { ParlourCardComponent } from './parlour-card/parlour-card.component';
import { ParlourDetailsComponent } from './parlour-details/parlour-details.component';
import { ParloursResolver } from 'src/app/resolver/parlours.resolver';
import { ParloursDetailsResolver } from 'src/app/resolver/parlours.details.resolver';

@NgModule({
  imports: [
    CommonModule,
    ParlourRoutingModule
  ],
  providers: [ParloursResolver, ParloursDetailsResolver],
  declarations: [ParloursComponent, ParlourCardComponent, ParlourDetailsComponent]
})
export class ParloursModule { }
