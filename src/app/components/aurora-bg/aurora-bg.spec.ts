import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroraBg } from './aurora-bg';

describe('AuroraBg', () => {
  let component: AuroraBg;
  let fixture: ComponentFixture<AuroraBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuroraBg],
    }).compileComponents();

    fixture = TestBed.createComponent(AuroraBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
