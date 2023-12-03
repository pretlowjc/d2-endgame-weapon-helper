import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs'
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatToolbarModule,
        MatTabsModule
    ],
    exports: [
        MatToolbarModule,
        MatTabsModule
    ]
})

export class AngularMaterialModule { }