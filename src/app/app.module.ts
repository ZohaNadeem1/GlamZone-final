import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchJobsPipe } from './pipes/search-jobs.pipe';
import { SearchParloursPipe } from './pipes/search-parlours.pipe';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environement } from './environment';
import { ParloursModule } from './pages/parlours/parlours.module';
import { JobsModule } from './pages/jobs/jobs.module';
import { AuthenticationModule } from './authentication/Authentication.module';
import { FormsModule } from '@angular/forms';

import { ChipsModule } from 'primeng/chips';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    AppComponent,
    SearchJobsPipe,
    SearchParloursPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ParloursModule,
    JobsModule,
    AuthenticationModule,
    FormsModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environement.firebase)),
    ChipsModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
