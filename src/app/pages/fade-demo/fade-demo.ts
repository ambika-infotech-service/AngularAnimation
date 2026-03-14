import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

type Duration = 200 | 400 | 700 | 1200;

@Component({
  selector: 'app-fade-demo',
  imports: [],
  templateUrl: './fade-demo.html',
  styleUrl: './fade-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      state('visible',  style({ opacity: 1 })),
      state('hidden',   style({ opacity: 0 })),
      transition('hidden => visible', animate('{{ duration }}ms ease-in')),
      transition('visible => hidden', animate('{{ duration }}ms ease-out')),
    ]),
    trigger('fadeScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.85)' }),
        animate('400ms cubic-bezier(0.34,1.56,0.64,1)',
          style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('250ms ease-in',
          style({ opacity: 0, transform: 'scale(0.85)' })),
      ]),
    ]),
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('250ms ease-in',
          style({ opacity: 0, transform: 'translateY(20px)' })),
      ]),
    ]),
  ],
})
export class FadeDemo {
  readonly fadeState = signal<'visible' | 'hidden'>('visible');
  readonly showScaleBox = signal(true);
  readonly showUpBox = signal(true);
  readonly duration = signal<Duration>(400);

  readonly durations: Duration[] = [200, 400, 700, 1200];

  toggleFade(): void {
    this.fadeState.update(s => s === 'visible' ? 'hidden' : 'visible');
  }

  toggleScale(): void {
    this.showScaleBox.update(v => !v);
  }

  toggleUp(): void {
    this.showUpBox.update(v => !v);
  }

  setDuration(d: Duration): void {
    this.duration.set(d);
  }
}
