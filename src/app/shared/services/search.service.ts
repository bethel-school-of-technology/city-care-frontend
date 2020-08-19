import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

url: string = 'http://localhost:3000/search';
usersArray: Array<any> = [];

constructor(private http: HttpClient) {

}
}
