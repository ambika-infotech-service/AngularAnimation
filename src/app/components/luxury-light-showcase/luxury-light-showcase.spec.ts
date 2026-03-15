import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryLightShowcase } from './luxury-light-showcase';

describe('LuxuryLightShowcase', () => {
  let component: LuxuryLightShowcase;
  let fixture: ComponentFixture<LuxuryLightShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxuryLightShowcase],
    }).compileComponents();

    fixture = TestBed.createComponent(LuxuryLightShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
