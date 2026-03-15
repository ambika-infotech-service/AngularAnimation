import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilkRibbonBg } from './silk-ribbon-bg';

describe('SilkRibbonBg', () => {
  let component: SilkRibbonBg;
  let fixture: ComponentFixture<SilkRibbonBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilkRibbonBg],
    }).compileComponents();

    fixture = TestBed.createComponent(SilkRibbonBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
