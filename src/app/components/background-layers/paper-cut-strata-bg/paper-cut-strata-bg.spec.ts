import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperCutStrataBg } from './paper-cut-strata-bg';

describe('PaperCutStrataBg', () => {
  let component: PaperCutStrataBg;
  let fixture: ComponentFixture<PaperCutStrataBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperCutStrataBg],
    }).compileComponents();

    fixture = TestBed.createComponent(PaperCutStrataBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
