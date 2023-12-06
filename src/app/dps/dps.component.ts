import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface WeaponStats {
  weaponType: string;
  frame: string;
  trueDps: number;
  sustainedDps: number;
}

@Component({
  selector: 'app-dps',
  templateUrl: './dps.component.html',
  styleUrls: ['./dps.component.css']
})

export class DpsComponent {
  weapons: WeaponStats[] = [
    // insert weapon data and statistics from Quantum Damage-ics Spreadsheet...
    { weaponType: 'Auto Rifle', frame: 'Rapid Fire', trueDps: 6126, sustainedDps: 5456 },
    { weaponType: 'Auto Rifle', frame: 'Adaptive', trueDps: 6030, sustainedDps: 6023 },
    // continue with the rest of the weapons...

  ]

  sortedData: WeaponStats[];

  constructor() {
    this.sortedData = this.weapons.slice();
  }

  sortData(sort: Sort) {
    const data = this.weapons.slice();
    if(!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'weaponType':
          return compare(a.weaponType, b.weaponType, isAsc);
        case 'frame':
          return compare(a.frame, b.frame, isAsc);
        case 'trueDps':
          return compare(a.trueDps, b.trueDps, isAsc);
        case 'sustainedDps':
          return compare(a.sustainedDps, b.sustainedDps, isAsc);
        default:
          return 0;
      }
    });
  }
}  

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
