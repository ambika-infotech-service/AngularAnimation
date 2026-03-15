import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopographicFlowBg } from './topographic-flow-bg';

describe('TopographicFlowBg', () => {
  let component: TopographicFlowBg;
  let fixture: ComponentFixture<TopographicFlowBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopographicFlowBg],
    }).compileComponents();

    fixture = TestBed.createComponent(TopographicFlowBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
