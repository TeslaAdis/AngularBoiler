import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatGridListModule,
        MatMenuModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatGridListModule,
        MatMenuModule,
        MatDialogModule
    ]
})
export class MaterialImportModule { }
