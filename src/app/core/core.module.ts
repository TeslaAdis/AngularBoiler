import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './authentication/user.service';
import { AppSettingsService } from './services/app-settings.service';
import { FormHelperService } from './services/form-helper.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AppSettingsService,
    UserService,
    FormHelperService
  ]
})
export class CoreModule { }
