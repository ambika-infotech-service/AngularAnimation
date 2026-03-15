import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { BackgroundDetail } from './background-detail';

describe('BackgroundDetail', () => {
  let component: BackgroundDetail;
  let fixture: ComponentFixture<BackgroundDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundDetail],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ slug: 'floating-shapes' })),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
