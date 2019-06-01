import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AuthenticationService } from '../services/AuthenticationService';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  currentUser = '';
  constructor(public dialog: MatDialog, private authService: AuthenticationService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  displayDialog(title, detail, actionOnConfirmed, Type) {
    const dialogRef = this.dialog.open(Type, {
      data: {
        title: title,
        icon: 'warning_outline',
        detail: detail,
        yesButtonLabel: 'Yes'
      },
      disableClose: true
    });

    return dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        actionOnConfirmed(confirmed);
      }
    });
  }

  onMakeAnnouncement(event) {
    this.displayDialog('Add Announcement', event, () => {
    }, AddAnnouncementComponent);
  }

}
