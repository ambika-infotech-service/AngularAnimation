import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export interface KeyframeCard {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-keyframe-demo',
  imports: [],
  templateUrl: './keyframe-demo.html',
  styleUrl: './keyframe-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyframeDemo {
  readonly isPlaying = signal<Record<string, boolean>>({
    bounce: false,
    shake: false,
    pulse: false,
    spin: false,
    flip: false,
    rubberBand: false,
  });

  readonly cards: KeyframeCard[] = [
    { id: 'bounce', name: 'Bounce', icon: 'bi-arrow-up-circle-fill', description: 'Multi-step vertical bounce with decreasing amplitude.', color: 'primary' },
    { id: 'shake', name: 'Shake', icon: 'bi-exclamation-triangle-fill', description: 'Rapid horizontal oscillation - great for errors.', color: 'danger' },
    { id: 'pulse', name: 'Pulse', icon: 'bi-heart-fill', description: 'Scale in and out with opacity change.', color: 'accent' },
    { id: 'spin', name: 'Spin', icon: 'bi-arrow-repeat', description: 'Full 360deg rotation with eased timing.', color: 'secondary' },
    { id: 'flip', name: '3D Flip', icon: 'bi-card-heading', description: 'Perspective Y-axis flip with overshoot.', color: 'info' },
    { id: 'rubberBand', name: 'Rubber Band', icon: 'bi-suit-spade-fill', description: 'Elastic stretch-and-compress effect.', color: 'warning' },
  ];

  isCardPlaying(id: string): boolean {
    return !!this.isPlaying()[id];
  }

  play(id: string): void {
    this.isPlaying.update(s => ({ ...s, [id]: false }));
    setTimeout(() => {
      this.isPlaying.update(s => ({ ...s, [id]: true }));
    }, 20);
  }

  onDone(id: string): void {
    this.isPlaying.update(s => ({ ...s, [id]: false }));
  }
}
