import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminToolbarComponent } from './components/admin-toolbar/admin-toolbar.component';

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
