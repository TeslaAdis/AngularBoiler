import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
/* layouts */
import { LandingModule } from './layouts/landing/landing.module';
import { AdminModule } from './layouts/admin/admin.module';

import { AuthGuard } from './core/guards/auth-guard';

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
    AdminModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
