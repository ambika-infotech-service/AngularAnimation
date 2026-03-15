import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshGradientBg } from './mesh-gradient-bg';

describe('MeshGradientBg', () => {
  let component: MeshGradientBg;
  let fixture: ComponentFixture<MeshGradientBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeshGradientBg],
    }).compileComponents();

    fixture = TestBed.createComponent(MeshGradientBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
