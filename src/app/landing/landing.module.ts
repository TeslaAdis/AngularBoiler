import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing.routing';

import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { LandingToolbarComponent } from './components/landing-toolbar/landing-toolbar.component';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';


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
    RegisterComponent,
    AboutComponent,
    HomeComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ]
})
export class LandingModule { }
