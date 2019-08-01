import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormioAuthComponent, FormioAuthService } from 'angular-formio/auth';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'//,
  //styleUrls: ['./auth.component.scss']
})
export class AuthComponent extends FormioAuthComponent {
  constructor(public service: FormioAuthService,  private router: Router) {
    super();
    this.service.onLogin.subscribe(() => {
      this.router.navigate(['/wizard']);
    });
  }
}
