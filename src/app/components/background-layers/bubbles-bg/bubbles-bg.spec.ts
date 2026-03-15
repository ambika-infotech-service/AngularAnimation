import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblesBg } from './bubbles-bg';

describe('BubblesBg', () => {
  let component: BubblesBg;
  let fixture: ComponentFixture<BubblesBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubblesBg],
    }).compileComponents();

    fixture = TestBed.createComponent(BubblesBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
