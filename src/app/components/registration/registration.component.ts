import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

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
  user: User = new User();
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  invalidIsOrg() {
    return (
      this.submitted &&
      (this.serviceErrors.isOrg != null ||
        this.userForm.controls.isOrg.errors != null)
    );
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
      isOrg: ['', Validators.required],
      first_name: ['', [Validators.required, Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.maxLength(50)]],
      contact_method: [' ', [Validators.required, Validators.maxLength(25)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(75)],
      ],
      address1: [' ', [Validators.required, Validators.maxLength(25)]],
      address2: [' ', [Validators.required, Validators.maxLength(25)]],
      city: [' ', [Validators.required, Validators.maxLength(25)]],
      state: [' ', [Validators.required, Validators.maxLength(25)]],
      county: [' ', [Validators.required, Validators.maxLength(25)]],
      zipcode: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')],
      ],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      mobile_phone: [' ', [Validators.minLength(10), Validators.maxLength(10)]],
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
 /*  onSubmit() {
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
  } */
  onSubmit() {
    this.authorizationService.registerUser(this.user).subscribe(result => {
      console.log(result);
      this.router.navigate(['/city-care/user-login']);
    })
  }
}
