import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatToolbarModule,
        MatTabsModule,
        MatCheckboxModule,
        MatListModule,
        MatSortModule
    ],
    exports: [
        MatToolbarModule,
        MatTabsModule,
        MatCheckboxModule,
        MatListModule,
        MatSortModule
    ]
})

export class AngularMaterialModule { }