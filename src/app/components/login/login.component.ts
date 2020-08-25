import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Subscription } from 'rxjs';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  submitted = false;
  serviceErrors: any = {};

  user: User = new User();
  isLoading = false;
  private authStatusSub: Subscription;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authorizationService: AuthorizationService,
    public router: Router
  ) { }

  invalidEmail() {
    return (
      this.submitted &&
      (this.serviceErrors.email != null ||
        this.loginForm.controls.email.errors != null)
    );
  }

  invalidPassword() {
    return (
      this.submitted &&
      (this.serviceErrors.password != null ||
        this.loginForm.controls.password.errors != null)
    );
  }
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [' ', [Validators.required, Validators.email, Validators.maxLength(75)]],
      password: [' ', [ Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    });
    
  }
  login() {
    this.isLoading =true;
    this.authorizationService.login(this.user).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('access-token', res.token);
      this.router.navigate(['/city-care/users-profile']);
    });
  }

}
