import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { FormioModule } from 'angular-formio';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { ResetMailerComponent } from './reset-mailer/reset-mailer.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const authRoutes = FormioAuthRoutes({
  auth: AuthComponent,
  login: LoginComponent
});

authRoutes[0].children.push({
  path: 'mailer',
  component: ResetMailerComponent
});

authRoutes[0].children.push({
  path: 'reset',
  component: ResetPasswordComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioAuth,
    RouterModule.forChild(FormioAuthRoutes())
  ],
  declarations: [
    /* AuthComponent,
    LoginComponent,
    ResetMailerComponent,
    ResetPasswordComponent */
  ]
})
export class AuthModule { }
