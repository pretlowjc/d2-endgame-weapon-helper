import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links = [
    { path: 'home', name: 'Home'},
    { path: 'checklist', name: 'Endgame Weapon Checklist'},
    { path: 'dps', name: 'DPS Chart'},
    { path: 'links', name: 'Useful Links'},
    { path: 'perk-tier', name: 'Weapon Perk Tier List'}
  ]

  activeLink = this.links[0];
}
