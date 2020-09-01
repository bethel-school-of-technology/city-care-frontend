import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  public user: User = new User();
  public isLoading = false;
  public isAuthenticated = false;
  private authStatusSub: Subscription;

  
  
   
  constructor(
    private authorizationService: AuthorizationService,
    public router: Router
  ) { }

    ngOnInit() {
      this.authStatusSub = this.authorizationService.getAuthStatusListener().subscribe(
        authStatus => {
          this.isLoading = false;
        })
        
  }
 
  // login() {
  //     this.authorizationService.login(this.user);
  // }
  

onLogout() {
  this.authorizationService.logout();
}
ngOnDestroy() {
  this.authStatusSub.unsubscribe();
}
}
