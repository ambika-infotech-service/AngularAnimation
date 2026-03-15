import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidChromeBg } from './liquid-chrome-bg';

describe('LiquidChromeBg', () => {
  let component: LiquidChromeBg;
  let fixture: ComponentFixture<LiquidChromeBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquidChromeBg],
    }).compileComponents();

    fixture = TestBed.createComponent(LiquidChromeBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
