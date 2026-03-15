import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialFrameBg } from './editorial-frame-bg';

describe('EditorialFrameBg', () => {
  let component: EditorialFrameBg;
  let fixture: ComponentFixture<EditorialFrameBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorialFrameBg],
    }).compileComponents();

    fixture = TestBed.createComponent(EditorialFrameBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
