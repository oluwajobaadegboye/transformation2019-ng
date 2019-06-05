import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/AuthenticationService';
import { UserService } from '../services/UserService';
import { User } from '../models/model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username', 'email', 'role'];
  dataSource = [];
  currentUser = '';
  managedUsers : User[];

  constructor(private authService : AuthenticationService,
    private userService : UserService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();

    this.userService.getAllManagedUser().subscribe(
      data => {
        console.log('MANAGED USER ',data)
        this.managedUsers = data;
      }
    );
  }

}
