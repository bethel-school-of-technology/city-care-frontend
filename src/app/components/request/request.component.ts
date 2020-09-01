import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})

export class RequestComponent implements OnInit, OnDestroy {

  public requested = false;
  public submitted = false;
  public userForm: FormGroup;
  public serviceErrors: any = {};
  public isLoading = false;
  public isAuthenticated = false;
  private authListenerSub: Subscription;

  constructor(
    private authorizationService: AuthorizationService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}


  ngOnInit() {
    this.isLoading = true;
    this.isAuthenticated = this.authorizationService.getIsAuth();
    this.authListenerSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated
      });
      this.isLoading = false;

    this.userForm = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  createRequest() {
    //this.requestService.createRequest(this.request);
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }
}
