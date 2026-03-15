import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FloatingShapes } from '../../components/floating-shapes/floating-shapes';
import { HeroParticles } from '../../components/hero-particles/hero-particles';
import { HeroShimmer } from '../../components/hero-shimmer/hero-shimmer';
import { GeometricShapes } from '../../components/geometric-shapes/geometric-shapes';
import { GlowNodes } from '../../components/glow-nodes/glow-nodes';
import { LightRays } from '../../components/light-rays/light-rays';
import { DepthLayers } from '../../components/depth-layers/depth-layers';
import { StarfieldBg } from '../../components/starfield-bg/starfield-bg';
import { AuroraBg } from '../../components/aurora-bg/aurora-bg';
import { NeonGridBg } from '../../components/neon-grid-bg/neon-grid-bg';
import { BubblesBg } from '../../components/bubbles-bg/bubbles-bg';

@Component({
  selector: 'app-bg-demo',
  imports: [
    FloatingShapes, HeroParticles, HeroShimmer,
    GeometricShapes, GlowNodes, LightRays, DepthLayers,
    StarfieldBg, AuroraBg, NeonGridBg, BubblesBg,
  ],
  templateUrl: './bg-demo.html',
  styleUrl: './bg-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BgDemo {}
