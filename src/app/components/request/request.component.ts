import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // import { User } from '../../shared/models/user.model';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
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
          let path = '**profile route**' + data.user.id;
          this.router.navigate([path]);
        },
        (error) => {
          this.serviceErrors = error.error.error;
        }
      );
      this.registered = true;
    }
  }
}
