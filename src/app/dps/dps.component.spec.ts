import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpsComponent } from './dps.component';

describe('DpsComponent', () => {
  let component: DpsComponent;
  let fixture: ComponentFixture<DpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DpsComponent]
    });
    fixture = TestBed.createComponent(DpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
