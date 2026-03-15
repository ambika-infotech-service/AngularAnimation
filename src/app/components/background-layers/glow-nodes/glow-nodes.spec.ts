import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowNodes } from './glow-nodes';

describe('GlowNodes', () => {
  let component: GlowNodes;
  let fixture: ComponentFixture<GlowNodes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlowNodes],
    }).compileComponents();

    fixture = TestBed.createComponent(GlowNodes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
