import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {

  registered = false;
  submitted = false;
  userForm: FormGroup;
  id: string;
  serviceErrors: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  invalidDescription() {
    return (
      this.submitted &&
      (this.serviceErrors.description != null ||
        this.userForm.controls.description.errors != null)
    );
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid == true) {
      return;
    } else {
      let data: any = Object.assign({ id: this.id }, this.userForm.value);
      this.http.post('/register', data).subscribe(
        (data: any) => {
          let path = '/city-care/users-profile' + data.user.id;
          this.router.navigate(['path']);
        },
        (error) => {
          this.serviceErrors = error.error.error;
        }
      );
      this.registered = true;
    }
  }
}
