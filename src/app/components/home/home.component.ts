import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public isAuthenticated = false;
  private authStatusListenerSub: Subscription;
  public userId: string;
  public isOrg = false; //Determine the user status, organization or individual

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit(){
    this.isLoading = true;
    this.isAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusListenerSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated
      });
      this.isLoading = false;
  }
  ngOnDestroy() {
    this.authStatusListenerSub.unsubscribe();
  }
} 
