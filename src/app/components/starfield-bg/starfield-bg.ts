import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Star { id: number; x: number; y: number; size: number; duration: number; delay: number; }

@Component({
  selector: 'app-starfield-bg',
  imports: [],
  templateUrl: './starfield-bg.html',
  styleUrl: './starfield-bg.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarfieldBg {
  readonly stars: Star[] = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: (i * 137.508) % 100,
    y: (i * 97.314) % 100,
    size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1,
    duration: 2 + (i % 4),
    delay: -(i % 5),
  }));
}
