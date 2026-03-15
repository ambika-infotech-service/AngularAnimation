import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlueprintPaperBg } from '../background-layers/blueprint-paper-bg/blueprint-paper-bg';
import { PricingAuraBg } from '../background-layers/pricing-aura-bg/pricing-aura-bg';
import { SunwashMeshBg } from '../background-layers/sunwash-mesh-bg/sunwash-mesh-bg';

@Component({
  selector: 'app-light-content-showcase',
  imports: [NgOptimizedImage, SunwashMeshBg, BlueprintPaperBg, PricingAuraBg],
  templateUrl: './light-content-showcase.html',
  styleUrl: './light-content-showcase.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightContentShowcase {}
