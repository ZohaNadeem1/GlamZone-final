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

import { HeaderComponent } from './components/header/header.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchJobsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ParloursModule,
    JobsModule,
    AuthenticationModule,
    FormsModule,
    GoogleMapsModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environement.firebase))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
