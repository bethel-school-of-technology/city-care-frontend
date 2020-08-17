import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // Fake API URL
url: string = 'https://jsonplaceholder.typicode.com/users';
usersArray: Array<any> = [];

constructor(private http: HttpClient) {
  this.http.get(this.url).subscribe(data => {
    // Populating usersArray with names from API
    data.json().forEach(element => {
      this.usersArray.push(element.name);
    });
  });
}
}
