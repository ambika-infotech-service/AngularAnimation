import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometricShapes } from './geometric-shapes';

describe('GeometricShapes', () => {
  let component: GeometricShapes;
  let fixture: ComponentFixture<GeometricShapes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeometricShapes],
    }).compileComponents();

    fixture = TestBed.createComponent(GeometricShapes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
