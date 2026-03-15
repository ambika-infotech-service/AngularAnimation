import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FloatItem { id: number; left: number; top: number; }

@Component({
  selector: 'app-depth-layers',
  imports: [],
  templateUrl: './depth-layers.html',
  styleUrl: './depth-layers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthLayers {
  readonly layer1: FloatItem[] = [1, 2, 3, 4, 5].map(i => ({ id: i, left: 15 * i, top: 20 * i }));
  readonly layer2: FloatItem[] = [1, 2, 3, 4].map(i => ({ id: i, left: 20 * i, top: 25 * i }));
  readonly layer3: FloatItem[] = [1, 2, 3].map(i => ({ id: i, left: 30 * i, top: 30 * i }));
}
