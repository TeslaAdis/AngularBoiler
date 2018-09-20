import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { AdminRoutingModule } from './admin.routing';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminLayoutComponent,
    AdminToolbarComponent
  ]
})
export class AdminModule { }
