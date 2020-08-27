import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
// import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginOptions: any = ['Email', 'Username']

  public submitted = false;
  public serviceErrors: any = {};

  public user: User = new User();
  public isLoading = false;
  private authStatusSub: Subscription;//Check the status of the user

  constructor(
     private fb: FormBuilder,
    private authorizationService: AuthorizationService,
    public router: Router
  ) { }


  loginOptionsForm = this.fb.group({
    name: ['Login Type']
  })
 
 /*  invalidEmail() {
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
   */
  ngOnInit() {
  /*   this.authStatusSub = this.authorizationService.getAuthStatusListener()
    .subscribe(authStatus => {
      this.isLoading = false;
    }) */
    // this.loginForm = this.formBuilder.group({
    //   email: [' ', [Validators.required, Validators.email, Validators.maxLength(75)]],
    //   password: [' ', [ Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    // });
    
  }
  login() { //Move this to the authorization service and subscribe to it. 
    this.isLoading =true;
    this.authorizationService.login(this.user).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('access-token', res.token);
      this.router.navigate(['/city-care/users-profile']);
    });
  }
  

onLogout() {
  this.authorizationService.logout();
}

}
