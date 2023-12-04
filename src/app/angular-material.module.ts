import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list'
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatToolbarModule,
        MatTabsModule,
        MatCheckboxModule,
        MatListModule
    ],
    exports: [
        MatToolbarModule,
        MatTabsModule,
        MatCheckboxModule,
        MatListModule
    ]
})

export class AngularMaterialModule { }