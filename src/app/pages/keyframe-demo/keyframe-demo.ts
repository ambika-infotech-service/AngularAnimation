import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from '@angular/animations';

export interface KeyframeCard {
  id: string;
  name: string;
  icon: string;
  description: string;
  trigger: string;
  color: string;
}

@Component({
  selector: 'app-keyframe-demo',
  imports: [],
  templateUrl: './keyframe-demo.html',
  styleUrl: './keyframe-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('bounce', [
      transition('idle => bounce', [
        animate('700ms ease-in-out', keyframes([
          style({ transform: 'translateY(0)',    offset: 0 }),
          style({ transform: 'translateY(-30px)', offset: 0.3 }),
          style({ transform: 'translateY(0)',    offset: 0.6 }),
          style({ transform: 'translateY(-12px)', offset: 0.75 }),
          style({ transform: 'translateY(0)',    offset: 1 }),
        ])),
      ]),
    ]),
    trigger('shake', [
      transition('idle => shake', [
        animate('500ms ease-in-out', keyframes([
          style({ transform: 'translateX(0)',   offset: 0 }),
          style({ transform: 'translateX(-10px)', offset: 0.15 }),
          style({ transform: 'translateX(10px)',  offset: 0.3 }),
          style({ transform: 'translateX(-10px)', offset: 0.45 }),
          style({ transform: 'translateX(10px)',  offset: 0.6 }),
          style({ transform: 'translateX(-5px)',  offset: 0.75 }),
          style({ transform: 'translateX(5px)',   offset: 0.85 }),
          style({ transform: 'translateX(0)',   offset: 1 }),
        ])),
      ]),
    ]),
    trigger('pulse', [
      transition('idle => pulse', [
        animate('600ms ease-in-out', keyframes([
          style({ transform: 'scale(1)',    opacity: 1, offset: 0 }),
          style({ transform: 'scale(1.25)', opacity: 0.8, offset: 0.4 }),
          style({ transform: 'scale(1)',    opacity: 1, offset: 1 }),
        ])),
      ]),
    ]),
    trigger('spin', [
      transition('idle => spin', [
        animate('700ms cubic-bezier(0.4, 0, 0.2, 1)', keyframes([
          style({ transform: 'rotate(0deg)',   offset: 0 }),
          style({ transform: 'rotate(360deg)', offset: 1 }),
        ])),
      ]),
    ]),
    trigger('flip', [
      transition('idle => flip', [
        animate('700ms ease-in-out', keyframes([
          style({ transform: 'perspective(400px) rotateY(0)',    offset: 0 }),
          style({ transform: 'perspective(400px) rotateY(90deg)',  offset: 0.4 }),
          style({ transform: 'perspective(400px) rotateY(-20deg)', offset: 0.75 }),
          style({ transform: 'perspective(400px) rotateY(0)',    offset: 1 }),
        ])),
      ]),
    ]),
    trigger('rubberBand', [
      transition('idle => rubberBand', [
        animate('700ms ease-in-out', keyframes([
          style({ transform: 'scaleX(1) scaleY(1)',       offset: 0 }),
          style({ transform: 'scaleX(1.4) scaleY(0.75)',  offset: 0.3 }),
          style({ transform: 'scaleX(0.75) scaleY(1.25)', offset: 0.5 }),
          style({ transform: 'scaleX(1.15) scaleY(0.9)',  offset: 0.65 }),
          style({ transform: 'scaleX(0.95) scaleY(1.05)', offset: 0.8 }),
          style({ transform: 'scaleX(1) scaleY(1)',       offset: 1 }),
        ])),
      ]),
    ]),
  ],
})
export class KeyframeDemo {
  readonly states = signal<Record<string, 'idle' | string>>({
    bounce:     'idle',
    shake:      'idle',
    pulse:      'idle',
    spin:       'idle',
    flip:       'idle',
    rubberBand: 'idle',
  });

  readonly cards: KeyframeCard[] = [
    { id: 'bounce',     name: 'Bounce',      icon: 'bi-arrow-up-circle-fill', description: 'Multi-step vertical bounce with decreasing amplitude.', trigger: 'bounce',     color: 'primary' },
    { id: 'shake',      name: 'Shake',       icon: 'bi-exclamation-triangle-fill', description: 'Rapid horizontal oscillation — great for errors.', trigger: 'shake',      color: 'danger' },
    { id: 'pulse',      name: 'Pulse',       icon: 'bi-heart-fill', description: 'Scale in and out with opacity change.', trigger: 'pulse',      color: 'accent' },
    { id: 'spin',       name: 'Spin',        icon: 'bi-arrow-repeat', description: 'Full 360° rotation with eased timing.', trigger: 'spin',       color: 'secondary' },
    { id: 'flip',       name: '3D Flip',     icon: 'bi-card-heading', description: 'Perspective Y-axis flip with overshoot.', trigger: 'flip',       color: 'info' },
    { id: 'rubberBand', name: 'Rubber Band', icon: 'bi-suit-spade-fill', description: 'Elastic stretch-and-compress effect.', trigger: 'rubberBand', color: 'warning' },
  ];

  getState(id: string): string {
    return this.states()[id] ?? 'idle';
  }

  play(id: string): void {
    this.states.update(s => ({ ...s, [id]: 'idle' }));
    setTimeout(() => {
      this.states.update(s => ({ ...s, [id]: id }));
    }, 20);
  }

  onDone(id: string): void {
    this.states.update(s => ({ ...s, [id]: 'idle' }));
  }
}
