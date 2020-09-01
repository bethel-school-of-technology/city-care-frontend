import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit, OnDestroy  {
  
  public isOrg = false;
  public user: User;
  public isLoading = false;
  public userIsAuthenticated = false;
  private authStatusSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
    this.getUser();
    this.isLoading = true;
    this.isOrg = this.authorizationService.getIsAuth();
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated
      });
      this.isLoading = false;
  }

  getUser() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.authorizationService.getUser(userId).subscribe((user: any) => {
      this.user = user;
    });
  }

  updateUser() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.authorizationService.updateUser(userId, this.user).subscribe(result => {
      console.log(result);
      this.router.navigate(['/city-care/users-profile']);
    })
  }
ngOnDestroy() {
  this.authStatusSub.unsubscribe();
}
}
