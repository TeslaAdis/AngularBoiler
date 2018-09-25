import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
// Forms
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class MaterialImportModule { }
