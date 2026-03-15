import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFocusBg } from './feature-focus-bg';

describe('FeatureFocusBg', () => {
  let component: FeatureFocusBg;
  let fixture: ComponentFixture<FeatureFocusBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFocusBg],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureFocusBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
