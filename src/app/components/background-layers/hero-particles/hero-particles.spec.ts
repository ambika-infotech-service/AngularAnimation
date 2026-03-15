import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParticles } from './hero-particles';

describe('HeroParticles', () => {
  let component: HeroParticles;
  let fixture: ComponentFixture<HeroParticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroParticles],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroParticles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
