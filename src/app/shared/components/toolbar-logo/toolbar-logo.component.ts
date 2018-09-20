import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Component({
  selector: 'app-toolbar-logo',
  templateUrl: './toolbar-logo.component.html',
  styleUrls: ['./toolbar-logo.component.scss']
})
export class ToolbarLogoComponent implements OnInit {

  constructor(
    public appSettings: AppSettingsService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  navigateToRoot() {
    this.router.navigate(['/']);
  }

}
