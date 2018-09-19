import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-landing-toolbar',
  templateUrl: './landing-toolbar.component.html',
  styleUrls: ['./landing-toolbar.component.scss']
})
export class LandingToolbarComponent implements OnInit {

  constructor(
    public _userService: UserService
  ) { }

  ngOnInit(): void {
  }
}
