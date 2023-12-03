import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkTierComponent } from './perk-tier.component';

describe('PerkTierComponent', () => {
  let component: PerkTierComponent;
  let fixture: ComponentFixture<PerkTierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerkTierComponent]
    });
    fixture = TestBed.createComponent(PerkTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
