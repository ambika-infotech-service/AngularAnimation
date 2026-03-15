import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchStripesBg } from './glitch-stripes-bg';

describe('GlitchStripesBg', () => {
  let component: GlitchStripesBg;
  let fixture: ComponentFixture<GlitchStripesBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlitchStripesBg],
    }).compileComponents();

    fixture = TestBed.createComponent(GlitchStripesBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
