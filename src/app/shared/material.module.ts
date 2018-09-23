import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material";
import { MatCheckboxModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
//Forms
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialImportModule {}
