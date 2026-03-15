import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthLayers } from './depth-layers';

describe('DepthLayers', () => {
  let component: DepthLayers;
  let fixture: ComponentFixture<DepthLayers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepthLayers],
    }).compileComponents();

    fixture = TestBed.createComponent(DepthLayers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
