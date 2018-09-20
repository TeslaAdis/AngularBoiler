import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { AppSettingsService } from './services/app-settings.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AppSettingsService,
    UserService
  ]
})
export class CoreModule { }
