import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationBg } from './constellation-bg';

describe('ConstellationBg', () => {
  let component: ConstellationBg;
  let fixture: ComponentFixture<ConstellationBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstellationBg],
    }).compileComponents();

    fixture = TestBed.createComponent(ConstellationBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
