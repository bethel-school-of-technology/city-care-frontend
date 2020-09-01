import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

@Component({
  selector: 'app-team-bio',
  templateUrl: './team-bio.component.html',
  styleUrls: ['./team-bio.component.css']
})
export class TeamBioComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public isAuthenticated = false;
  public userIsAuthenticated = false;
  private autStatusSub: Subscription;
  
  constructor(
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.autStatusSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated
      });
      this.isLoading = false;
  }
ngOnDestroy() {
  this.autStatusSub.unsubscribe();
}
}
