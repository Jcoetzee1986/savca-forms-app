import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormioGrid } from 'angular-formio/grid';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';
import { PrismService } from './Prism.service';

import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Make sure we use fontawesome everywhere in Form.io renderers.
const Formio = require('formiojs').Formio;
Formio.icons = 'fontawesome';

/**
 * Import the Custom component CheckMatrix.
 */
import './components/CheckMatrix';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormioModule,
    FormioGrid,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'savca-forms-app',
        component: HomeComponent
      },
      {
        path: '#',
        component: HomeComponent
      },
      {
        path: '*',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ], { useHash: true })
  ],
  providers: [
    PrismService,
    FormioAuthService,
    FormioResources,
    { provide: FormioAppConfig, useValue: AppConfig },
    {
      provide: FormioAuthConfig, useValue: {
        login: {
          form: 'user/login'
        },
        register: {
          form: 'user/register'
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
