import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { UserService } from 'src/app/core/authentication/user.service';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-landing-toolbar',
  templateUrl: './landing-toolbar.component.html',
  styleUrls: ['./landing-toolbar.component.scss']
})
export class LandingToolbarComponent implements OnInit {

  constructor(
    public _userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  moveToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px'
    });
  }
  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '300px'
    });
  }
}
