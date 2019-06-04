import { Component } from '@angular/core';
import { AutoLogoutService } from './services/AutoLogoutService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Transformation 2019';

  constructor(
    private autoLogout: AutoLogoutService
  ) { }
}
