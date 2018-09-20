import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-landing-toolbar',
  templateUrl: './landing-toolbar.component.html',
  styleUrls: ['./landing-toolbar.component.scss']
})
export class LandingToolbarComponent implements OnInit {

  constructor(
    public _userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  moveToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
  moveToLogin(): void {
    this.router.navigate(['/login']);
  }
  moveToRegister(): void {
    this.router.navigate(['/register']);
  }
}
