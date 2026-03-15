import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-shimmer',
  imports: [],
  templateUrl: './hero-shimmer.html',
  styleUrl: './hero-shimmer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroShimmer {}
