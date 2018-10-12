import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing.routing';

import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { LandingToolbarComponent } from './components/landing-toolbar/landing-toolbar.component';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { AboutComponent } from './pages/about/about.component';

import { HomeModule } from './pages/home/home.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    HomeModule
  ],
  declarations: [
    LandingLayoutComponent,
    LandingToolbarComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ]
})
export class LandingModule { }
