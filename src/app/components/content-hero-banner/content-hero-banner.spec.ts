import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeroBanner } from './content-hero-banner';

describe('ContentHeroBanner', () => {
  let component: ContentHeroBanner;
  let fixture: ComponentFixture<ContentHeroBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentHeroBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentHeroBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
