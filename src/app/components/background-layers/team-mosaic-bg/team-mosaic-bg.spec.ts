import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMosaicBg } from './team-mosaic-bg';

describe('TeamMosaicBg', () => {
  let component: TeamMosaicBg;
  let fixture: ComponentFixture<TeamMosaicBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMosaicBg],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMosaicBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
