import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
    Components Used:
    about
    inside of books folder...
        books-entry
        books-list
        books-page
    footer
    header
*/
import { HomeComponent } from './home/home.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DpsComponent } from './dps/dps.component';
import { LinksComponent } from './links/links.component';
import { PerkTierComponent } from './perk-tier/perk-tier.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'checklist', component: ChecklistComponent},
    { path: 'dps', component: DpsComponent},
    { path: 'links', component: LinksComponent},
    { path: 'perk-tier', component: PerkTierComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AngularRoutingModule { }