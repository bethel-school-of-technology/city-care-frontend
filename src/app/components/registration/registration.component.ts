import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  isOrg: boolean = true;

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {}

  registerUser() {
    this.authService.registerUser(this.user).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/city-care/user-login']);
    });
  }

  setIsOrg(e: boolean) {
    this.isOrg = e;
  }
}
