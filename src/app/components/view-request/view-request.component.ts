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
  public isOrg = false;
  private authListenerSub: Subscription;

  constructor(
    private authorizationService: AuthorizationService,
    private requestService: RequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.isLoading = true;
    this.isOrg = this.authorizationService.getIsOrg();
    this.isAuthenticated = this.authorizationService.getIsAuth();
    this.authListenerSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated
      });
      const requestId = +this.route.snapshot.paramMap.get('id');
      this.requestService.getUserRequest(requestId).subscribe(request => this.request = request)
      this.isLoading = true;
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }
}
