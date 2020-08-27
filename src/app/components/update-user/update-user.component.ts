import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public user: User;
  public isLoading = false;
  public isAuthenticated = false;
  private authStatusSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.authorizationService.getUser(userId).subscribe((user: any) => {
      this.user = user;
    })
  }
  updateUser() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.authorizationService.updateUser(userId, this.user).subscribe(result => {
      console.log(result);
      this.router.navigate(['/city-care/users-profile']);
    })
  }
}
