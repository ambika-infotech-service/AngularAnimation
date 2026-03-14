import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('heroEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('700ms 200ms cubic-bezier(0,0,0.2,1)',
          style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('cardsEnter', [
      transition(':enter', [
        query('.demo-card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('500ms cubic-bezier(0,0,0.2,1)',
              style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class Home implements OnInit {
  readonly loaded = signal(false);

  readonly demos = [
    {
      path: '/fade',
      icon: 'bi-eye-fill',
      title: 'Fade Animation',
      description: 'Smooth opacity transitions — fade elements in and out with Angular state triggers.',
      chip: 'Opacity',
      chipClass: 'chip-primary',
      gradient: 'gradient-primary',
    },
    {
      path: '/slide',
      icon: 'bi-arrows-move',
      title: 'Slide Animation',
      description: 'Directional slide effects — enter and leave from top, bottom, left, or right.',
      chip: 'Transform',
      chipClass: 'chip-secondary',
      gradient: 'gradient-secondary',
    },
    {
      path: '/stagger',
      icon: 'bi-list-ul',
      title: 'Stagger Animation',
      description: 'Sequential list entrance — items animate one after another with configurable delay.',
      chip: 'Query & Stagger',
      chipClass: 'chip-accent',
      gradient: 'gradient-accent',
    },
    {
      path: '/keyframe',
      icon: 'bi-stars',
      title: 'Keyframe Animation',
      description: 'Multi-step keyframe sequences — bounce, shake, pulse, and spin effects.',
      chip: 'Keyframes',
      chipClass: 'chip-primary',
      gradient: 'gradient-hero',
    },
  ];

  ngOnInit(): void {
    this.loaded.set(true);
  }
}
