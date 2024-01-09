import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-18';
  userService: UserService;
  currentRole: string = 'none';

  constructor(userService: UserService) {
    this.userService = userService;
    this.currentRole = this.userService.getUserRole();
  }

  login(asAdmin: boolean = false) {
    console.log(this.currentRole);
    this.userService.login(asAdmin);
    this.currentRole = this.userService.getUserRole();
  }
}
