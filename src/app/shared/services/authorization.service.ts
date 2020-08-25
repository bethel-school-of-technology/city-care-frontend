import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {

  api: string = 'http://localhost:3000/users';

  private isLoading = false;
  public users: User[];
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}  
//get the token
getToken() {
  return this.token;
}
//check to see if the user is authenticated
getIsAuth() {
  return this.isAuthenticated;
}
//Get the user Id
getUserId() {
  return this.userId;
}
  //Check the users status
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
get isLoggedIn(): boolean {
  let authToken = localStorage.getItem('access-token');
  return(authToken !== null) ? true: false;
}
//Register a user
//Log a user in 
login(user: any) {
  return this.http.post(`${this.api}/login`, user).subscribe((res: any) => {
    const token = res.token;
    this.token = token;
    if(token) {
      const expiresInDuration = res.expiresIn;
      this.setAuthTimer(expiresInDuration);
      this.isAuthenticated = true;
      this.userId = res.userId;
      this.authStatusListener.next(true);
      const now = new Date(); //get the current time stamp
      const expirationDate = new Date(now.getTime() + expiresInDuration * 1000); //create the expiration date
      this.saveAuthData(token, expirationDate, this.userId);// executes the method saveAuthData
    }
  localStorage.setItem('access-token', res.token);
  this.router.navigate(['/city-care/users-profile']);
  }, error => {
    this.authStatusListener.next(false);
  })
}
//Try to automatically initialize the authorization status when the app starts
autoAuthUser() {
  const authInformation = this.getAuthData();
  if(!authInformation) {
    return;
  }
  const now = new Date();
  const expiresIn = authInformation.expirationDate.getTime()-now.getTime();
  console.log(authInformation, expiresIn)
  if(expiresIn > 0){
    this.token = authInformation.token;
    this.isAuthenticated = true;
    this.userId = authInformation.userId;//Set the user Id to the user id fetched from local storage
    this.setAuthTimer(expiresIn/1000)//Divide here because this is in milliseconds
    this.authStatusListener.next(true);
  }
}

//Log a user out
logout() {
  this.token = null;
  this.isAuthenticated = false;
  this.authStatusListener.next(false);
  clearTimeout(this.tokenTimer);//clears the token timer out when logout method is called
  this.clearAuthData(); //clears the local storage
  this.userId = null; //ensures the user Id is reset correctly after the user logs out
  this.router.navigate(['/city-care/user-login'])
}


  //Get a user/organization profile
  getProfile(userId: number): Observable<User> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<User>(`${this.api}/profile`, { headers: header });
  }



private setAuthTimer(duration: number) {
  console.log('Setting timer: ' + duration);
  this.tokenTimer = setTimeout(() => {
    this.logout();
  }, duration * 1000);//set timeout works in milliseconds so multiplies 3600 or 1hr by 1000
}
//Save authorization data, token and expiration time in local storage
private saveAuthData(token: string, expirationDate: Date, userId: string) {
  localStorage.setItem('access-token', token); //stores the token in local storage
  localStorage.setItem('expirationDate', expirationDate.toISOString());//stores the expiration date in local storage
  localStorage.setItem('userId', userId)//saves the user id to local storage
}
//clear out local storage of any information pertaining to authentication
private clearAuthData() {
  localStorage.removeItem('access-token');//Removes the toke from local storage
  localStorage.removeItem('expiration');//removes the expiration date from local storage
  localStorage.removeItem('userId'); //removes the user Id from local storage
}
private getAuthData() {
  const token = localStorage.getItem('access-token');
  const expirationDate = localStorage.getItem('expiration');
  const userId = localStorage.getItem('userId');
  if(!token || !expirationDate) {//Check to see if there is not a token or expiration
    return; //doesn't return anything if the above condition is true
  }
  return {//returns a javascript object with the tokken and a new date object
    token: token,
    expirationDate: new Date(expirationDate),
    userId: userId //Add the user id to the return
  }
}
}
