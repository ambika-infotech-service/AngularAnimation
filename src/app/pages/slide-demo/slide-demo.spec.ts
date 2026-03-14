import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDemo } from './slide-demo';

describe('SlideDemo', () => {
  let component: SlideDemo;
  let fixture: ComponentFixture<SlideDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
