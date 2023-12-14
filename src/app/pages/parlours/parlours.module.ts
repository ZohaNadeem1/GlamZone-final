import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ParloursComponent } from './parlours.component';
import { ParlourRoutingModule } from './parlour-routing.module';
import { ParlourCardComponent } from './parlour-card/parlour-card.component';
import { ParlourDetailsComponent } from './parlour-details/parlour-details.component';
import { ParloursResolver } from 'src/app/resolver/parlours.resolver';
import { ParloursDetailsResolver } from 'src/app/resolver/parlours.details.resolver';
import { FirebaseTimestampPipe } from 'src/app/pipes/firabase.timestamp.pipe';
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SearchParloursPipe } from 'src/app/pipes/search-parlours.pipe';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { JobsModule } from '../jobs/jobs.module';
import { ParlourSideFilterComponent } from 'src/app/components/parlour-side-filter/parlour-side-filter.component';


@NgModule({
  imports: [
    CommonModule,
    ParlourRoutingModule,
    CalendarModule ,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    CarouselModule,
    TagModule,
    ScrollTopModule,
    TabViewModule,
    TooltipModule,
    CardModule,
    ImageModule,
    JobsModule
  ],
  exports: [SliderComponent],
  providers: [ParloursResolver, ParloursDetailsResolver, DatePipe],
  declarations: [ParloursComponent, ParlourCardComponent,SliderComponent, ParlourSideFilterComponent,
    TabsComponent, PopUpComponent, ParlourDetailsComponent, FirebaseTimestampPipe, SearchParloursPipe]
})
export class ParloursModule { }
