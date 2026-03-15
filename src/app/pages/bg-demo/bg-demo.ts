import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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

@Component({
  selector: 'app-bg-demo',
  imports: [
    FloatingShapes, HeroParticles, HeroShimmer,
    GeometricShapes, GlowNodes, LightRays, DepthLayers,
    StarfieldBg, AuroraBg, NeonGridBg, BubblesBg,
    MeshGradientBg, ConstellationBg, RadarRingsBg, GlitchStripesBg,
    PrismCausticsBg, TopographicFlowBg, VortexTunnelBg,
  ],
  templateUrl: './bg-demo.html',
  styleUrl: './bg-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BgDemo {
  readonly activeFilter = signal<'all' | 'ambient' | 'sci-fi' | 'abstract' | 'kinetic' | 'geometric' | 'mixed'>('all');

  readonly filters: ReadonlyArray<{
    value: 'all' | 'ambient' | 'sci-fi' | 'abstract' | 'kinetic' | 'geometric' | 'mixed';
    label: string;
  }> = [
    { value: 'all', label: 'All' },
    { value: 'ambient', label: 'Ambient' },
    { value: 'sci-fi', label: 'Sci-Fi' },
    { value: 'abstract', label: 'Abstract' },
    { value: 'kinetic', label: 'Kinetic' },
    { value: 'geometric', label: 'Geometric' },
    { value: 'mixed', label: 'Mixed' },
  ];

  setFilter(filter: 'all' | 'ambient' | 'sci-fi' | 'abstract' | 'kinetic' | 'geometric' | 'mixed'): void {
    this.activeFilter.set(filter);
  }

  isVisible(category: 'ambient' | 'sci-fi' | 'abstract' | 'kinetic' | 'geometric' | 'mixed'): boolean {
    return this.activeFilter() === 'all' || this.activeFilter() === category;
  }
}
