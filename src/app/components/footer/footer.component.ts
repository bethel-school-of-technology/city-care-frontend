import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  public user: User;
  public isOrg = false;
  public isLoading = false;
  public isAuthenticated = false;
  public userIsAuthenticated = false;
  private authListenerSub: Subscription; //listen for authentication

  constructor(
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.isOrg = this.authorizationService.getIsAuth();
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authListenerSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated
      });
      this.isLoading = false;
  }
  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
    }

}
