import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerkTierComponent } from './perk-tier/perk-tier.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { LinksComponent } from './links/links.component';
import { DpsComponent } from './dps/dps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerkTierComponent,
    ChecklistComponent,
    LinksComponent,
    DpsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
