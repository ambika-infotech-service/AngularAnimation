import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAuraBg } from './pricing-aura-bg';

describe('PricingAuraBg', () => {
  let component: PricingAuraBg;
  let fixture: ComponentFixture<PricingAuraBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingAuraBg],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingAuraBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
