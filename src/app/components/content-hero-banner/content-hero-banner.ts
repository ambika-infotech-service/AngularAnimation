import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SpotlightStageBg } from '../background-layers/spotlight-stage-bg/spotlight-stage-bg';

export interface HeroBannerAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  ariaLabel?: string;
  external?: boolean;
}

export interface HeroBannerImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

@Component({
  selector: 'app-content-hero-banner',
  imports: [NgOptimizedImage, SpotlightStageBg],
  templateUrl: './content-hero-banner.html',
  styleUrl: './content-hero-banner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentHeroBanner {
  readonly eyebrow = input<string>('Featured');
  readonly title = input.required<string>();
  readonly copy = input.required<string>();
  readonly actions = input<ReadonlyArray<HeroBannerAction>>([]);
  readonly image = input.required<HeroBannerImage>();
}
