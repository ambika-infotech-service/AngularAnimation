import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightStageBg } from './spotlight-stage-bg';

describe('SpotlightStageBg', () => {
  let component: SpotlightStageBg;
  let fixture: ComponentFixture<SpotlightStageBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotlightStageBg],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotlightStageBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
