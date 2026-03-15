import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismCausticsBg } from './prism-caustics-bg';

describe('PrismCausticsBg', () => {
  let component: PrismCausticsBg;
  let fixture: ComponentFixture<PrismCausticsBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrismCausticsBg],
    }).compileComponents();

    fixture = TestBed.createComponent(PrismCausticsBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
