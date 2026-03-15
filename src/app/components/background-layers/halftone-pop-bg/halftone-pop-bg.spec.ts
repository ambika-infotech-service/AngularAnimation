import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalftonePopBg } from './halftone-pop-bg';

describe('HalftonePopBg', () => {
  let component: HalftonePopBg;
  let fixture: ComponentFixture<HalftonePopBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalftonePopBg],
    }).compileComponents();

    fixture = TestBed.createComponent(HalftonePopBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
