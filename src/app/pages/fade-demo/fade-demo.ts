import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Duration = 200 | 400 | 700 | 1200;

@Component({
  selector: 'app-fade-demo',
  imports: [],
  templateUrl: './fade-demo.html',
  styleUrl: './fade-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
