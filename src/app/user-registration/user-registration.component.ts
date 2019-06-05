import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/UserService';
import { AlertService } from '../services/AlertService';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  roles = ["Announcement", "User", "Registration", "Schedule"]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      roles: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log('form ', this.registerForm.value)
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    const user = {...this.registerForm.value,role:this.registerForm.value.roles.toString().replace(/,/g, ';')}
   
    this.userService.createUser(user)
      .subscribe(
        data => {
          alert('User Created successful, \nPlease Login');
          this.router.navigate(['/ui/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
