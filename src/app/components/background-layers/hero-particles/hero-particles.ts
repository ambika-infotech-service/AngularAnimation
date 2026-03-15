import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-particles',
  imports: [],
  templateUrl: './hero-particles.html',
  styleUrl: './hero-particles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroParticles {}
