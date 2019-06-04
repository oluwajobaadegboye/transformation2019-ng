import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  currentUser = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();//localStorage.getItem('currentUser');
    console.log('SideNav ', this.currentUser);
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public onSidenavCloseLogout = () => {
    this.sidenavClose.emit();
    this.authService.logout();
    window.location.href = "/ui/login";
  }

}
