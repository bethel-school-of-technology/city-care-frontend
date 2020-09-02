import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { RequestService } from '../../shared/services/request.service';
import { Request } from '../../shared/models/request.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit, OnDestroy {

  public request: Request;
  public isLoading = false;
  public isAuthenticated = false;
  public userIsAuthenticated = false;
  public isOrg = false;
  public userIsOrg = false;
  private authStatusSub: Subscription;
  private orgStatusSub: Subscription;

  constructor(
    private authorizationService: AuthorizationService,
    private requestService: RequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.isLoading = true;
    this.isOrg = this.authorizationService.getIsOrg();
    this.orgStatusSub = this.authorizationService.getAuthStatusListener().subscribe(isOrg => {
      this.userIsOrg = isOrg;
    })
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated
      });
      const requestId = +this.route.snapshot.paramMap.get('id');
      this.requestService.getUserRequest(requestId).subscribe(request => this.request = request)
      this.isLoading = false;
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
    this.orgStatusSub.unsubscribe();
  }
}
