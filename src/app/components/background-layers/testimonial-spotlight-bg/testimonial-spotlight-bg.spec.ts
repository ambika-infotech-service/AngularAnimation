import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSpotlightBg } from './testimonial-spotlight-bg';

describe('TestimonialSpotlightBg', () => {
  let component: TestimonialSpotlightBg;
  let fixture: ComponentFixture<TestimonialSpotlightBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialSpotlightBg],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialSpotlightBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
