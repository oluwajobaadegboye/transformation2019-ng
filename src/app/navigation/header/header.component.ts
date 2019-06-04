import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  currentUser = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router ) { 

    }

  ngOnInit() {
    this.currentUser = this.authenticationService.getCurrentUser();//localStorage.getItem('currentUser');
    console.log('Header ', this.currentUser);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  
  onLogout(){
    this.authenticationService.logout();
    window.location.href = "/ui/login"; 
  }

}
