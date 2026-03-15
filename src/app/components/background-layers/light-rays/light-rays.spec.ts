import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightRays } from './light-rays';

describe('LightRays', () => {
  let component: LightRays;
  let fixture: ComponentFixture<LightRays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightRays],
    }).compileComponents();

    fixture = TestBed.createComponent(LightRays);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
