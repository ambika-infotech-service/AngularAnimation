import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroShimmer } from './hero-shimmer';

describe('HeroShimmer', () => {
  let component: HeroShimmer;
  let fixture: ComponentFixture<HeroShimmer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroShimmer],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroShimmer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
