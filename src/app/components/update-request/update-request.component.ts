import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../shared/services/request.service';
import { Request } from '../../shared/models/request.model';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit, OnDestroy {

public isOrg = false;
public isLoading = false;
public isAuthenticated = false;
public userIsAuthenticated = false;
public request: Request;
private authStatusSub: Subscription

  constructor(
    private authorizationService: AuthorizationService,
    private route: ActivatedRoute,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.isOrg = this.authorizationService.getIsOrg();
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated
      });
    const requestId = +this.route.snapshot.paramMap.get('id');
    this.requestService.getUserRequest(requestId).subscribe(request => this.request = request);
    this.isLoading = false;
  }
ngOnDestroy() {
  this.authStatusSub.unsubscribe();
}
}
