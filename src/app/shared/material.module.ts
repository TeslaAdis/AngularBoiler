import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatGridListModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatGridListModule,
        MatMenuModule
    ]
})
export class MaterialImportModule { }
