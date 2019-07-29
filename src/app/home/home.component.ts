import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormioAppConfig } from 'angular-formio';
import { PrismService } from '../Prism.service';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(
    public config: FormioAppConfig,
    public prism: PrismService,
    public auth: FormioAuthService,
    private router: Router
  ) {

  }
  ngAfterViewInit() {
    this.prism.init();
  }
}
