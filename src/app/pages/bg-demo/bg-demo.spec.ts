import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgDemo } from './bg-demo';

describe('BgDemo', () => {
  let component: BgDemo;
  let fixture: ComponentFixture<BgDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(BgDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
