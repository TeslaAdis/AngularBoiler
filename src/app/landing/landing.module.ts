import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing.routing';

import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { LandingToolbarComponent } from './components/landing-toolbar/landing-toolbar.component';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';


@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  declarations: [
    LandingLayoutComponent,
    LandingToolbarComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class LandingModule { }
