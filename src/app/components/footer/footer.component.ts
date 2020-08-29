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
  public isLoading = false;
  public isAuthenticated = false;
  private authListenerSub: Subscription; //listen for authentication

  constructor(
    private route: ActivatedRoute,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.isAuthenticated = this.authorizationService.getIsAuth();
    this.authListenerSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated
      });
      this.isLoading = false;
  }
  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
    }

}
