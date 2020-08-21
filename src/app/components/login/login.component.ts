import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private authorizationService: AuthorizationService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  login() {
    this.authorizationService.login(this.user).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('access-token', res.token);
      this.router.navigate(['/city-care/users-profile']);
    });
  }
}
