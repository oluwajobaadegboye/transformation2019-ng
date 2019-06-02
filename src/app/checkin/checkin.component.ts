import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/AuthenticationService';
import { PeriodicElement, User } from '../models/model';
import { UserService } from '../services/UserService';
import { AlertService } from '../services/AlertService';
import { MatDialog } from '@angular/material';
import { AssignRoomDialogComponent } from './assign-room-dialog/assign-room-dialog.component';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  checkInForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  userMatch = false;

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'state','checkedIn', 'roomNumber', 'actions'];
  dataSource = [];


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    public dialog: MatDialog, ) {

  }

  ngOnInit() {
    this.checkInForm = this.formBuilder.group({
      searchKey: ['', Validators.required],
      searchValue: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.checkInForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.checkInForm.invalid) {
      return;
    }

    this.loading = true;


    if (this.checkInForm.controls.searchKey.value === 'name') {

      this.userService.searchByName(this.checkInForm.controls.searchValue.value)
        .subscribe(
          data => {
            if (data) {
              this.dataSource = data;
              console.log(this.dataSource)
              this.userMatch = true;
            } else {
              this.dataSource = [];
              this.userMatch = false;
            }

            this.loading = false;
            console.log('DT name ', this.dataSource);
            // this.router.navigate([this.returnUrl]);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
            this.userMatch = false;
          });

    } else if (this.checkInForm.controls.searchKey.value === 'code') {

      this.userService.getById(this.checkInForm.controls.searchValue.value)
        .subscribe(
          data => {
            if (data) {
              this.dataSource = [data];
              console.log(this.dataSource)
              this.userMatch = true;
            } else {
              this.dataSource = [];
              this.userMatch = false;
            }
            this.loading = false;
            console.log('DT code', this.dataSource);
            // this.router.navigate([this.returnUrl]);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
            this.userMatch = false;
          });

    }

  }

  onCheckIn(e) {
    if (e.id > 0) {
      this.userService.checkIn(e.id)
        .subscribe(
          data => {
            if (data.checkIn) {
              alert(data.message);
            }
          },
          error => {
            alert('Something went wrong')
          });
    }
  }

  onAssignRoom(e) {
    let dialogRef = this.dialog.open(AssignRoomDialogComponent, {
      width: '400px',
      data: e
    });
  }
}


