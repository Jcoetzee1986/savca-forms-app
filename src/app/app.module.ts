import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './config';
import { FormioAppConfig } from 'angular-formio';
import { FormioModule } from 'angular-formio';
import { FormioResources } from 'angular-formio/resource';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { HomeComponent } from './home/home.component';
import { WizardComponent } from './wizard/wizard.component';
import { AuthModule } from './auth/auth.module';

// Make sure we use fontawesome everywhere in Form.io renderers.
const Formio = require('formiojs').Formio;
Formio.icons = 'fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormioModule
  ],
  providers: [
    FormioResources,
    FormioAuthService,
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
