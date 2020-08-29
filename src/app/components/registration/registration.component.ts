import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public user: User = new User();
  public isOrg: boolean = true;
  public isAuthenticated = false;
  private authStatusSub: Subscription;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {
   this.authStatusSub = this.authorizationService.getAuthStatusListener().subscribe(
     authStatus => {
       this.isLoading = false;
     }
   )
  }

  registerUser() {
    this.authorizationService.registerUser(this.user);
  }

  setIsOrg(e: boolean) {
   return this.isOrg = e;
  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
