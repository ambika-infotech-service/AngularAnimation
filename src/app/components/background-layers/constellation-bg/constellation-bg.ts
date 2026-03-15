import { ChangeDetectionStrategy, Component } from '@angular/core';

interface StarNode {
  id: number;
  left: number;
  top: number;
  delay: number;
}

interface StarLink {
  id: number;
  left: number;
  top: number;
  width: number;
  angle: number;
}

@Component({
  selector: 'app-constellation-bg',
  imports: [],
  templateUrl: './constellation-bg.html',
  styleUrl: './constellation-bg.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConstellationBg {
  readonly stars: StarNode[] = [
    { id: 1, left: 12, top: 18, delay: 0 },
    { id: 2, left: 22, top: 28, delay: 0.6 },
    { id: 3, left: 33, top: 20, delay: 1.2 },
    { id: 4, left: 46, top: 35, delay: 0.4 },
    { id: 5, left: 58, top: 24, delay: 1.1 },
    { id: 6, left: 70, top: 38, delay: 0.8 },
    { id: 7, left: 80, top: 26, delay: 1.5 },
    { id: 8, left: 64, top: 62, delay: 0.3 },
    { id: 9, left: 44, top: 70, delay: 0.9 },
    { id: 10, left: 24, top: 60, delay: 1.8 },
  ];

  readonly links: StarLink[] = [
    { id: 1, left: 12, top: 18, width: 46, angle: 34 },
    { id: 2, left: 22, top: 28, width: 66, angle: -10 },
    { id: 3, left: 33, top: 20, width: 72, angle: 30 },
    { id: 4, left: 46, top: 35, width: 62, angle: -20 },
    { id: 5, left: 58, top: 24, width: 58, angle: 26 },
    { id: 6, left: 24, top: 60, width: 74, angle: 10 },
  ];
}
