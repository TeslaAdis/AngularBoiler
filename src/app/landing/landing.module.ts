import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';

import { LandingRoutingModule } from './landing.routing';
import { SharedModule } from '../shared/shared.module';
import { LandingToolbarComponent } from './landing-toolbar/landing-toolbar.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    LandingLayoutComponent,
    LandingToolbarComponent
  ]
})
export class LandingModule { }
