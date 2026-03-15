import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunwashMeshBg } from './sunwash-mesh-bg';

describe('SunwashMeshBg', () => {
  let component: SunwashMeshBg;
  let fixture: ComponentFixture<SunwashMeshBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunwashMeshBg],
    }).compileComponents();

    fixture = TestBed.createComponent(SunwashMeshBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
