import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPosterBg } from './solar-poster-bg';

describe('SolarPosterBg', () => {
  let component: SolarPosterBg;
  let fixture: ComponentFixture<SolarPosterBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarPosterBg],
    }).compileComponents();

    fixture = TestBed.createComponent(SolarPosterBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
