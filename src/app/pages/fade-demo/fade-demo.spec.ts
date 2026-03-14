import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeDemo } from './fade-demo';

describe('FadeDemo', () => {
  let component: FadeDemo;
  let fixture: ComponentFixture<FadeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(FadeDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
