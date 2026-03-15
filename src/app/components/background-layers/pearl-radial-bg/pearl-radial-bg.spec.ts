import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PearlRadialBg } from './pearl-radial-bg';

describe('PearlRadialBg', () => {
  let component: PearlRadialBg;
  let fixture: ComponentFixture<PearlRadialBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PearlRadialBg],
    }).compileComponents();

    fixture = TestBed.createComponent(PearlRadialBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
