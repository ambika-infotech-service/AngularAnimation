import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Bubble { id: number; x: number; size: number; duration: number; delay: number; }

@Component({
  selector: 'app-bubbles-bg',
  imports: [],
  templateUrl: './bubbles-bg.html',
  styleUrl: './bubbles-bg.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BubblesBg {
  readonly bubbles: Bubble[] = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: (i * 83.7 + 5) % 92,
    size: 20 + (i * 31) % 60,
    duration: 8 + (i % 6) * 2,
    delay: -(i % 7) * 1.5,
  }));
}
