import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AtelierPaperBg } from '../background-layers/atelier-paper-bg/atelier-paper-bg';
import { PearlRadialBg } from '../background-layers/pearl-radial-bg/pearl-radial-bg';
import { SilkRibbonBg } from '../background-layers/silk-ribbon-bg/silk-ribbon-bg';

@Component({
  selector: 'app-luxury-light-showcase',
  imports: [NgOptimizedImage, SilkRibbonBg, AtelierPaperBg, PearlRadialBg],
  templateUrl: './luxury-light-showcase.html',
  styleUrl: './luxury-light-showcase.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuxuryLightShowcase {}
