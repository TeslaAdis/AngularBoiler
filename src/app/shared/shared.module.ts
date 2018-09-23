import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialImportModule } from './material.module';
import { ToolbarUserComponent } from './components/toolbar-user/toolbar-user.component';
import { ToolbarLogoComponent } from './components/toolbar-logo/toolbar-logo.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialImportModule
  ],
  declarations: [
    ToolbarUserComponent,
    ToolbarLogoComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule,
    ToolbarUserComponent,
    ToolbarLogoComponent
  ],
})
export class SharedModule { }
