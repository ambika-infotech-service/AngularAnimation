import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Direction = 'left' | 'right' | 'top' | 'bottom';

@Component({
  selector: 'app-slide-demo',
  imports: [],
  templateUrl: './slide-demo.html',
  styleUrl: './slide-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideDemo {
  readonly activeDirection = signal<Direction>('left');
  readonly visible = signal(true);

  readonly directions: { value: Direction; icon: string; label: string }[] = [
    { value: 'left',   icon: 'bi-arrow-left-circle',  label: 'From Left' },
    { value: 'right',  icon: 'bi-arrow-right-circle', label: 'From Right' },
    { value: 'top',    icon: 'bi-arrow-up-circle',    label: 'From Top' },
    { value: 'bottom', icon: 'bi-arrow-down-circle',  label: 'From Bottom' },
  ];

  setDirection(d: Direction): void {
    this.visible.set(false);
    this.activeDirection.set(d);
    setTimeout(() => this.visible.set(true), 50);
  }

  replay(): void {
    this.visible.set(false);
    setTimeout(() => this.visible.set(true), 50);
  }

  getTrigger(): string {
    return 'slide' + this.activeDirection()[0].toUpperCase() + this.activeDirection().slice(1);
  }
}
