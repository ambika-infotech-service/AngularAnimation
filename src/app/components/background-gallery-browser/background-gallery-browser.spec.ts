import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundGalleryBrowser } from './background-gallery-browser';

describe('BackgroundGalleryBrowser', () => {
  let component: BackgroundGalleryBrowser;
  let fixture: ComponentFixture<BackgroundGalleryBrowser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundGalleryBrowser],
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundGalleryBrowser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
