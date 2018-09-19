import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss']
})
export class ActiveUserComponent implements OnInit {

  constructor(
    public _userService: UserService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  logoutUser(): void {
    this._userService.logout();
  }
  moveToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
