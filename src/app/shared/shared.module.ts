import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportModule } from './material.module';
import { ActiveUserComponent } from './components/active-user/active-user.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialImportModule
  ],
  exports: [
    MaterialImportModule,
    ActiveUserComponent
  ],
  declarations: [ActiveUserComponent]
})
export class SharedModule { }
