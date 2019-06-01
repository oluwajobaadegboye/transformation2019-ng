import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AuthenticationService } from '../services/AuthenticationService';
import { AnnouncementService } from '../services/AnnouncementService';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  currentUser = '';
  announcements = [
    {
        "id": 7,
        "message": "To best achieve this I used a typical grid format normally reserved for magazines. This allowed us to design the spaces where the graphics and text could interact and work together but also keep a good amount of white space to let all the content breathe. The main goal of the design of the book was to be as simple and clear as possible. Every single page was art directed—in that the graphics and text work together to answer each question and present the information. "
    },
    {
        "id": 6,
        "message": "To best achieve this I used a typical grid format normally reserved for magazines. This allowed us to design the spaces where the graphics and text could interact and work together but also keep a good amount of white space to let all the content breathe. The main goal of the design of the book was to be as simple and clear as possible. Every single page was art directed—in that the graphics and text work together to answer each question and present the information. "
    },
    {
        "id": 5,
        "message": "To best achieve this I used a typical grid format normally reserved for magazines. This allowed us to design the spaces where the graphics and text could interact and work together but also keep a good amount of white space to let all the content breathe. The main goal of the design of the book was to be as simple and clear as possible. Every single page was art directed—in that the graphics and text work together to answer each question and present the information. "
    },
    {
        "id": 4,
        "message": "To best achieve this I used a typical grid format normally reserved for magazines. This allowed us to design the spaces where the graphics and text could interact and work together but also keep a good amount of white space to let all the content breathe. The main goal of the design of the book was to be as simple and clear as possible. Every single page was art directed—in that the graphics and text work together to answer each question and present the information. "
    },
    {
        "id": 3,
        "message": "The main goal of the design of the book was to be as simple and clear as possible. Every single page was art directed—in that the graphics and text work together to answer each question and present the information. To best achieve this I used a typical grid format normally reserved for magazines. This allowed us to design the spaces where the graphics and text could interact and work together but also keep a good amount of white space to let all the content breathe."
    },
    {
        "id": 2,
        "message": "Do you view the Bible as dated, obsolete, and irrelevant to your daily life? Or are you intimidated by the Bible and find it difficult to read? Or do you have difficulty seeing how different parts of the Bible fit together?"
    },
    {
        "id": 1,
        "message": "For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord."
    }
];

  constructor(public dialog: MatDialog, private authService: AuthenticationService,
    private announcementService: AnnouncementService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();

    this.announcementService.getAllAnnouncement().subscribe(
      data => {
        // this.announcements = data;
      }
    );
  }

  // displayDialog(title, detail, actionOnConfirmed, Type) {
  //   const dialogRef = this.dialog.open(Type, {
  //     width: '250px',
  //     data: {
  //       title: title,
  //       icon: 'warning_outline',
  //       detail: detail,
  //       yesButtonLabel: 'Yes'
  //     }
  //   });
  // 
  //   return dialogRef.afterClosed().subscribe(confirmed => {
  //     if (confirmed) {
  //       actionOnConfirmed(confirmed);
  //     }
  //   });
  // }

  onMakeAnnouncement(event) {
    let dialogRef = this.dialog.open(AddAnnouncementComponent, {
      width: '250px',
      // data: { name: this.name, animal: this.animal }
    });

    // dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed');
    // this.animal = result;
    // });

    // this.displayDialog('Add Announcement', event, () => {
    // }, AddAnnouncementComponent);
  }

}
