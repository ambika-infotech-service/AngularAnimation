import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarRingsBg } from './radar-rings-bg';

describe('RadarRingsBg', () => {
  let component: RadarRingsBg;
  let fixture: ComponentFixture<RadarRingsBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadarRingsBg],
    }).compileComponents();

    fixture = TestBed.createComponent(RadarRingsBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
