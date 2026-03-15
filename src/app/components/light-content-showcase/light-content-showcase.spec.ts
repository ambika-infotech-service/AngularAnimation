import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightContentShowcase } from './light-content-showcase';

describe('LightContentShowcase', () => {
  let component: LightContentShowcase;
  let fixture: ComponentFixture<LightContentShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightContentShowcase],
    }).compileComponents();

    fixture = TestBed.createComponent(LightContentShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
