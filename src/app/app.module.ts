import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { LandingModule } from './landing/landing.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    LandingModule,
    AdminModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
