import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { BackgroundGalleryBrowser } from '../../components/background-gallery-browser/background-gallery-browser';
import { BACKGROUND_FILTERS, BackgroundFilter } from '../../data/background-gallery.data';
import { FloatingShapes } from '../../components/background-layers/floating-shapes/floating-shapes';
import { HeroParticles } from '../../components/background-layers/hero-particles/hero-particles';
import { HeroShimmer } from '../../components/background-layers/hero-shimmer/hero-shimmer';
import { GeometricShapes } from '../../components/background-layers/geometric-shapes/geometric-shapes';
import { GlowNodes } from '../../components/background-layers/glow-nodes/glow-nodes';
import { LightRays } from '../../components/background-layers/light-rays/light-rays';
import { DepthLayers } from '../../components/background-layers/depth-layers/depth-layers';
import { StarfieldBg } from '../../components/background-layers/starfield-bg/starfield-bg';
import { AuroraBg } from '../../components/background-layers/aurora-bg/aurora-bg';
import { NeonGridBg } from '../../components/background-layers/neon-grid-bg/neon-grid-bg';
import { BubblesBg } from '../../components/background-layers/bubbles-bg/bubbles-bg';
import { MeshGradientBg } from '../../components/background-layers/mesh-gradient-bg/mesh-gradient-bg';
import { ConstellationBg } from '../../components/background-layers/constellation-bg/constellation-bg';
import { RadarRingsBg } from '../../components/background-layers/radar-rings-bg/radar-rings-bg';
import { GlitchStripesBg } from '../../components/background-layers/glitch-stripes-bg/glitch-stripes-bg';
import { PrismCausticsBg } from '../../components/background-layers/prism-caustics-bg/prism-caustics-bg';
import { TopographicFlowBg } from '../../components/background-layers/topographic-flow-bg/topographic-flow-bg';
import { VortexTunnelBg } from '../../components/background-layers/vortex-tunnel-bg/vortex-tunnel-bg';
import { PaperCutStrataBg } from '../../components/background-layers/paper-cut-strata-bg/paper-cut-strata-bg';
import { HalftonePopBg } from '../../components/background-layers/halftone-pop-bg/halftone-pop-bg';
import { LiquidChromeBg } from '../../components/background-layers/liquid-chrome-bg/liquid-chrome-bg';
import { SolarPosterBg } from '../../components/background-layers/solar-poster-bg/solar-poster-bg';
import { SpotlightStageBg } from '../../components/background-layers/spotlight-stage-bg/spotlight-stage-bg';
import { EditorialFrameBg } from '../../components/background-layers/editorial-frame-bg/editorial-frame-bg';
import { SoftVignetteBg } from '../../components/background-layers/soft-vignette-bg/soft-vignette-bg';
import { TestimonialSpotlightBg } from '../../components/background-layers/testimonial-spotlight-bg/testimonial-spotlight-bg';
import { TeamMosaicBg } from '../../components/background-layers/team-mosaic-bg/team-mosaic-bg';
import { FeatureFocusBg } from '../../components/background-layers/feature-focus-bg/feature-focus-bg';
import { ContentHeroBanner, HeroBannerAction, HeroBannerImage } from '../../components/content-hero-banner/content-hero-banner';
import { LightContentShowcase } from '../../components/light-content-showcase/light-content-showcase';
import { LuxuryLightShowcase } from '../../components/luxury-light-showcase/luxury-light-showcase';

@Component({
  selector: 'app-bg-demo',
  imports: [
    NgOptimizedImage,
    BackgroundGalleryBrowser,
    FloatingShapes, HeroParticles, HeroShimmer,
    GeometricShapes, GlowNodes, LightRays, DepthLayers,
    StarfieldBg, AuroraBg, NeonGridBg, BubblesBg,
    MeshGradientBg, ConstellationBg, RadarRingsBg, GlitchStripesBg,
    PrismCausticsBg, TopographicFlowBg, VortexTunnelBg,
    PaperCutStrataBg, HalftonePopBg, LiquidChromeBg, SolarPosterBg,
    SpotlightStageBg, EditorialFrameBg, SoftVignetteBg,
    TestimonialSpotlightBg, TeamMosaicBg, FeatureFocusBg,
    ContentHeroBanner, LightContentShowcase, LuxuryLightShowcase,
  ],
  templateUrl: './bg-demo.html',
  styleUrl: './bg-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BgDemo {
  readonly activeFilter = signal<BackgroundFilter>('all');

  readonly filters = BACKGROUND_FILTERS;

  setFilter(filter: BackgroundFilter): void {
    this.activeFilter.set(filter);
  }

  readonly heroBannerActions: ReadonlyArray<HeroBannerAction> = [
    { label: 'Pre-order', href: '#', ariaLabel: 'Pre-order the featured product' },
    { label: 'Download Deck', href: '#', variant: 'secondary', ariaLabel: 'Download the launch presentation' },
  ];

  readonly heroBannerImage: HeroBannerImage = {
    src: '/editorial-product.svg',
    alt: 'Illustrated product mockup',
    width: 320,
    height: 320,
    priority: true,
  };

  isVisible(category: Exclude<BackgroundFilter, 'all'>): boolean {
    return this.activeFilter() === 'all' || this.activeFilter() === category;
  }
}
