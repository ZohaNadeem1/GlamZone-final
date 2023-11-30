import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutes } from './Authentication.routing';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutes
  ],
  declarations: [AuthenticationComponent]
})
export class AuthenticationModule { }
