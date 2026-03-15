import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintPaperBg } from './blueprint-paper-bg';

describe('BlueprintPaperBg', () => {
  let component: BlueprintPaperBg;
  let fixture: ComponentFixture<BlueprintPaperBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueprintPaperBg],
    }).compileComponents();

    fixture = TestBed.createComponent(BlueprintPaperBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
