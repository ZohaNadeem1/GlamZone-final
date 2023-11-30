import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchJobsPipe } from './pipes/search-jobs.pipe';
import { SearchParloursPipe } from './pipes/search-parlours.pipe';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environement } from './environment';
import { ParloursModule } from './pages/parlours/parlours.module';
import { JobsModule } from './pages/jobs/jobs.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchJobsPipe,
    SearchParloursPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParloursModule,
    JobsModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environement.firebase)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
