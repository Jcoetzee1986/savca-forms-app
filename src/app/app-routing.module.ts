import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WizardComponent } from './wizard/wizard.component';
import { ResetMailerComponent } from './auth/reset-mailer/reset-mailer.component';
import { FMDPApplicationModule } from './fmdp-application/fmdp-application.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [

  { path: 'auth', loadChildren: () => AuthModule },
  /* {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }, */
  {
    path: '#',
    component: WizardComponent
  },
  {
    path: '',
    component: WizardComponent
  },
  {
    path: 'wizard',
    component: WizardComponent
  },
  {
    path: 'fmdp-application',
    loadChildren: './fmdp-application/fmdp-application.module#FMDPApplicationModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
