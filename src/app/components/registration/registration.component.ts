import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;
  id: string;
  serviceErrors: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // this.http.get('/api/v1/generate_uid').subscribe(
    //   (data: any) => {
    //     this.guid = data.guid;
    //   },
    //   (error) => {
    //     console.log(
    //       'There was an error generating the proper GUID on the server',
    //       error
    //     );
    //   }
    // );
  }

  invalidFirstName() {
    return (
      this.submitted &&
      (this.serviceErrors.first_name != null ||
        this.userForm.controls.first_name.errors != null)
    );
  }

  invalidLastName() {
    return (
      this.submitted &&
      (this.serviceErrors.last_name != null ||
        this.userForm.controls.last_name.errors != null)
    );
  }

  invalidEmail() {
    return (
      this.submitted &&
      (this.serviceErrors.email != null ||
        this.userForm.controls.email.errors != null)
    );
  }

  invalidPhone() {
    return (
      this.submitted &&
      (this.serviceErrors.phone != null ||
        this.userForm.controls.phone.errors != null)
    );
  }

  invalidZipcode() {
    return (
      this.submitted &&
      (this.serviceErrors.zipcode != null ||
        this.userForm.controls.zipcode.errors != null)
    );
  }

  invalidPassword() {
    return (
      this.submitted &&
      (this.serviceErrors.password != null ||
        this.userForm.controls.password.errors != null)
    );
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      type: ['', Validators.required],
      first_name: ['', [Validators.required, Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.maxLength(50)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(75)],
      ],
      zipcode: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')],
      ],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
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
