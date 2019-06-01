import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/AuthenticationService';
import { AlertService } from 'src/app/services/AlertService';
import { first } from 'rxjs/operators';
import { AnnouncementService } from 'src/app/services/AnnouncementService';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {

  makeAnnouncementForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    public dialogRef: MatDialogRef<AddAnnouncementComponent>,
    @Inject(MAT_DIALOG_DATA) public dependencies: any,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private announcementService : AnnouncementService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.makeAnnouncementForm = this.formBuilder.group({
      message: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.makeAnnouncementForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.makeAnnouncementForm.invalid) {
      return;
    }

    this.loading = true;
    this.announcementService.makeAnnouncent(this.makeAnnouncementForm.value)
      // .pipe(first())
      .subscribe(
        data => {
          alert('Announcement Saved')
          this.router.navigate(['/ui/announcement']);
        },
        error => {
          // this.alertService.error(error);
          alert('Something went wrong!')
          this.loading = false;
        });
  }

  onCancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.makeAnnouncementForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}
