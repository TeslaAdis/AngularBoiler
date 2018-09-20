import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  constructor(
    public _userService: UserService
  ) { }

  ngOnInit() {
  }

  logoutUser(): void {
    this._userService.logout();
  }

}
