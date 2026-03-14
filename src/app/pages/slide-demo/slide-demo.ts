import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

type Direction = 'left' | 'right' | 'top' | 'bottom';

function slideEnter(dx: string, dy: string) {
  return [
    style({ opacity: 0, transform: `translate(${dx}, ${dy})` }),
    animate('450ms cubic-bezier(0,0,0.2,1)',
      style({ opacity: 1, transform: 'translate(0,0)' })),
  ];
}

function slideLeave(dx: string, dy: string) {
  return [
    animate('300ms cubic-bezier(0.4,0,1,1)',
      style({ opacity: 0, transform: `translate(${dx}, ${dy})` })),
  ];
}

@Component({
  selector: 'app-slide-demo',
  imports: [],
  templateUrl: './slide-demo.html',
  styleUrl: './slide-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideLeft',   [
      transition(':enter', slideEnter('-60px', '0')),
      transition(':leave', slideLeave('-60px', '0')),
    ]),
    trigger('slideRight',  [
      transition(':enter', slideEnter('60px', '0')),
      transition(':leave', slideLeave('60px', '0')),
    ]),
    trigger('slideTop',    [
      transition(':enter', slideEnter('0', '-40px')),
      transition(':leave', slideLeave('0', '-40px')),
    ]),
    trigger('slideBottom', [
      transition(':enter', slideEnter('0', '40px')),
      transition(':leave', slideLeave('0', '40px')),
    ]),
  ],
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
