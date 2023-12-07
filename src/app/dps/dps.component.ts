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
    { weaponType: 'Auto Rifle', frame: 'Adaptive', trueDps: 6030, sustainedDps: 5115 },
    { weaponType: 'Auto Rifle', frame: 'Precision', trueDps: 6023, sustainedDps: 5172 },
    { weaponType: 'Auto Rifle', frame: 'High Impact', trueDps: 5436, sustainedDps:  4823},

    { weaponType: 'SMG', frame: 'Precision', trueDps: 8180, sustainedDps: 6149 },
    { weaponType: 'SMG', frame: 'Aggressive', trueDps: 8904, sustainedDps: 6293 },
    { weaponType: 'SMG', frame: 'Adaptive', trueDps: 8685, sustainedDps: 6065 },
    { weaponType: 'SMG', frame: 'Lightweight', trueDps: 9255, sustainedDps: 6463 },

    { weaponType: 'Pulse Rifle', frame: 'Rapid Fire', trueDps: 4788, sustainedDps: 4152 },
    { weaponType: 'Pulse Rifle', frame: 'Lightweight', trueDps: 4455, sustainedDps: 3839 },
    { weaponType: 'Pulse Rifle', frame: 'Legacy PR-55', trueDps: 4455, sustainedDps: 3804 },
    { weaponType: 'Pulse Rifle', frame: 'Adaptive', trueDps: 4589, sustainedDps: 4039 },
    { weaponType: 'Pulse Rifle', frame: 'High Impact', trueDps: 4465, sustainedDps: 3983 },
    { weaponType: 'Pulse Rifle', frame: 'Aggressive', trueDps: 4418, sustainedDps: 3943 },

    { weaponType: 'Scout Rifle', frame: 'Rapid Fire', trueDps: 5889, sustainedDps: 5055 },
    { weaponType: 'Scout Rifle', frame: 'Lightweight', trueDps: 5197, sustainedDps: 4493 },
    { weaponType: 'Scout Rifle', frame: 'Precision', trueDps: 5307, sustainedDps: 4672 },
    { weaponType: 'Scout Rifle', frame: 'High Impact', trueDps: 5113, sustainedDps: 4627 },
    { weaponType: 'Scout Rifle', frame: 'Aggressive', trueDps: 4656, sustainedDps: 3449 },

    { weaponType: 'Handcannon', frame: 'Aggressive', trueDps: 4654, sustainedDps: 3992 },
    { weaponType: 'Handcannon', frame: 'Precision', trueDps: 5244, sustainedDps: 4336 },
    { weaponType: 'Handcannon', frame: 'Double Fire', trueDps: 4902, sustainedDps: 3884 },
    { weaponType: 'Handcannon', frame: 'Lightweight', trueDps: 5215, sustainedDps: 4327 },
    { weaponType: 'Handcannon', frame: 'Adaptive', trueDps: 4741, sustainedDps: 3934 },

    { weaponType: 'Sidearm', frame: 'Adaptive 3-Burst', trueDps: 9084, sustainedDps: 7718 },
    { weaponType: 'Sidearm', frame: 'Omolon Adaptive', trueDps: 9084, sustainedDps: 7718 },
    { weaponType: 'Sidearm', frame: 'Rapid Fire', trueDps: 9128, sustainedDps: 7250 },
    { weaponType: 'Sidearm', frame: 'Aggressive 2-Burst', trueDps: 7860, sustainedDps: 6973 },
    { weaponType: 'Sidearm', frame: 'Precision', trueDps: 8441, sustainedDps: 7079 },
    { weaponType: 'Sidearm', frame: 'Lightweight', trueDps: 9054, sustainedDps: 7031 },

    { weaponType: 'Bow', frame: 'Lightweight', trueDps: 4179, sustainedDps: 4179 },
    { weaponType: 'Bow', frame: 'Precision', trueDps: 4318, sustainedDps: 4318 },

    
    // continue with the rest of the weapons...
    // Special weapons and heavy weapons will be done at a later date.
    // { weaponType: '', frame: '', trueDps: , sustainedDps:  },


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
