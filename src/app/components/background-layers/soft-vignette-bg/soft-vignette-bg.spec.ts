import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftVignetteBg } from './soft-vignette-bg';

describe('SoftVignetteBg', () => {
  let component: SoftVignetteBg;
  let fixture: ComponentFixture<SoftVignetteBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftVignetteBg],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftVignetteBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
