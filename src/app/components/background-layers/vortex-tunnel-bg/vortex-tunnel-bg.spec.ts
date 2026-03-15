import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortexTunnelBg } from './vortex-tunnel-bg';

describe('VortexTunnelBg', () => {
  let component: VortexTunnelBg;
  let fixture: ComponentFixture<VortexTunnelBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VortexTunnelBg],
    }).compileComponents();

    fixture = TestBed.createComponent(VortexTunnelBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
