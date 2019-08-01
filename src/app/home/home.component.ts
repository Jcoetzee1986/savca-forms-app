import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormioAppConfig } from 'angular-formio';
import { FormioModule } from 'angular-formio';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public config: FormioAppConfig,
    public auth: FormioAuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
