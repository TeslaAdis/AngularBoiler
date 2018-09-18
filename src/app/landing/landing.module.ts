import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';

import { LandingRoutingModule } from './landing.routing';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [LandingLayoutComponent]
})
export class LandingModule { }
