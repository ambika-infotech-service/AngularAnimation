import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingShapes } from './floating-shapes';

describe('FloatingShapes', () => {
  let component: FloatingShapes;
  let fixture: ComponentFixture<FloatingShapes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingShapes],
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingShapes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
