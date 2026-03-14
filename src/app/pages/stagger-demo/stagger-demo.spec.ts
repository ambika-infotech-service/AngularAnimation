import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggerDemo } from './stagger-demo';

describe('StaggerDemo', () => {
  let component: StaggerDemo;
  let fixture: ComponentFixture<StaggerDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaggerDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(StaggerDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
