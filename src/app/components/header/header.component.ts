import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isOrg = false;
  public user: User;
  public isLoading = false;
  public isAuthenticated = false;
  public userIsAuthenticated = false;
  private authListenerSub: Subscription; //listen for authentication

  constructor(
    private route: ActivatedRoute,
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
  onLogout() {
    this.authorizationService.logout();
  }
  getUser() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.authorizationService.getUser(userId).subscribe((user: any) => {
      console.log(user);
      this.user = user
    })
  }
  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }
}

