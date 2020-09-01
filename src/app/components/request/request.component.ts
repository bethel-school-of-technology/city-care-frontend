import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Request } from '../../shared/models/request.model';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit, OnDestroy {
  public request: Request = new Request();
  public isOrg = false;
  public submitted = false;
  public isLoading = false;
  public isAuthenticated = false;
  public userIsAuthenticated = false;
  private authStatusSub: Subscription;

  constructor(
    private requestService: RequestService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.isOrg = this.authorizationService.getIsOrg();
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.isLoading = false;
  }

  // Test change
  createRequest() {
    this.requestService.createRequest(this.request);
    this.router.navigate(['/city-care/users-profile']);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
