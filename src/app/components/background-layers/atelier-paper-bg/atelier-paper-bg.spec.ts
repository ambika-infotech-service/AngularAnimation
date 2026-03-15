import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierPaperBg } from './atelier-paper-bg';

describe('AtelierPaperBg', () => {
  let component: AtelierPaperBg;
  let fixture: ComponentFixture<AtelierPaperBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtelierPaperBg],
    }).compileComponents();

    fixture = TestBed.createComponent(AtelierPaperBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
