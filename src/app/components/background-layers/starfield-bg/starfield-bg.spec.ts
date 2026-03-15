import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarfieldBg } from './starfield-bg';

describe('StarfieldBg', () => {
  let component: StarfieldBg;
  let fixture: ComponentFixture<StarfieldBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarfieldBg],
    }).compileComponents();

    fixture = TestBed.createComponent(StarfieldBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
