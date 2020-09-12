import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { RequestService } from '../../shared/services/request.service';
import { Request } from '../../shared/models/request.model';
import { User } from '../../shared/models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit, OnDestroy {

  public user: User;
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
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated
      });
    this.isOrg = this.authorizationService.getIsOrg();
    this.orgStatusSub = this.authorizationService.getAuthStatusListener().subscribe(isOrg => {
      this.userIsOrg = isOrg;
    });
    const requestId = +this.route.snapshot.paramMap.get('id');
    this.requestService.getUserRequest(requestId).subscribe(request => {
      this.request = request
      console.log(request)
    })
    
    this.isLoading = false;
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
    this.orgStatusSub.unsubscribe();
  }
}
