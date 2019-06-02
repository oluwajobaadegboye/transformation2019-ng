import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/model';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-assign-room-dialog',
  templateUrl: './assign-room-dialog.component.html',
  styleUrls: ['./assign-room-dialog.component.css']
})
export class AssignRoomDialogComponent implements OnInit {

  assignRoomForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(public dialogRef: MatDialogRef<AssignRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dependencies: any,
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.assignRoomForm = this.formBuilder.group({
      roomNumber: ['', [Validators.required, Validators.pattern("^[0-9]{1,6}$")]]
    });
    console.log('Data dialog is ', this.dependencies)
  }

  // convenience getter for easy access to form fields
  get f() { return this.assignRoomForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.assignRoomForm.invalid) {
      return;
    }
    console.log('form is valid')
    this.loading = true;
    this.userService.assignRoom(this.dependencies.id, this.assignRoomForm.controls.roomNumber.value)
      .subscribe(
        data => {
          alert('Room Assigned Successfully');
          this.dialogRef.close();
        },
        error => {
          // this.alertService.error(error);
          alert('Something went wrong!')
          this.loading = false;
        });
  }

  close() {
    this.dialogRef.close();
  }

}
