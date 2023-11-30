import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
                              {  
                                path: '',
                                component: AuthenticationComponent,
                                children: [
                                        {
                                          path: '',
                                          component: LoginComponent
                                        },
                                        {  
                                          path: 'signup',
                                          component: SignupComponent
                                        },
                                        {
                                          path: 'forgot-password',
                                          component: ForgotPasswordComponent
                                        }
                                ]
                              }
                       ];

export const AuthenticationRoutes = RouterModule.forChild(routes);
