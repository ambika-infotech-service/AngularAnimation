import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonGridBg } from './neon-grid-bg';

describe('NeonGridBg', () => {
  let component: NeonGridBg;
  let fixture: ComponentFixture<NeonGridBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonGridBg],
    }).compileComponents();

    fixture = TestBed.createComponent(NeonGridBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
