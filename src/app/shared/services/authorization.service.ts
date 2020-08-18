import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
<<<<<<< HEAD

  
  constructor(
    
  ) {}
  
  

=======
  orgApi: string = 'http://localhost:3000/orgs';
  userApi: string = 'http://localhost:3000/users';

  public organizations: Organization[];
  public users: User[];

  constructor(private http: HttpClient, public router: Router) {}
  //Register a user
  registerUser() {}
  login() {}
  getProfile() {}
>>>>>>> 873bc3cc00433b295a5bf1f8c6393b3465f1395a
}
