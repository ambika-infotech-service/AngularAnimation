import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframeDemo } from './keyframe-demo';

describe('KeyframeDemo', () => {
  let component: KeyframeDemo;
  let fixture: ComponentFixture<KeyframeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyframeDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyframeDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
