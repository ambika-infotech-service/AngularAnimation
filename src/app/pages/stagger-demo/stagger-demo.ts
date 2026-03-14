import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  AnimationBuilder,
  animate,
  query,
  stagger,
  style,
} from '@angular/animations';

export interface ListItem {
  id: number;
  icon: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-stagger-demo',
  imports: [],
  templateUrl: './stagger-demo.html',
  styleUrl: './stagger-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaggerDemo {
  private readonly builder = inject(AnimationBuilder);
  private readonly listEl = viewChild<ElementRef>('listEl');
  private readonly gridEl = viewChild<ElementRef>('gridEl');

  private nextId = 6;
  readonly staggerDelay = signal(80);
  readonly delays = [40, 80, 120, 200];

  private readonly _items = signal<ListItem[]>([
    { id: 1, icon: 'bi-rocket-takeoff', label: 'Launch',      description: 'Ignite your project with a powerful start.' },
    { id: 2, icon: 'bi-shield-check',   label: 'Security',    description: 'Keep your app safe with robust patterns.' },
    { id: 3, icon: 'bi-palette',        label: 'Design',      description: 'Craft beautiful, accessible interfaces.' },
    { id: 4, icon: 'bi-speedometer2',   label: 'Performance', description: 'Optimise for speed and responsiveness.' },
    { id: 5, icon: 'bi-code-slash',     label: 'Code',        description: 'Write clean, maintainable TypeScript.' },
  ]);

  readonly items = computed(() => this._items());

  private readonly gridIcons = [
    'bi-star', 'bi-heart', 'bi-lightning', 'bi-gem', 'bi-trophy',
    'bi-fire', 'bi-cloud', 'bi-moon', 'bi-sun',
  ];

  readonly gridItems = signal(
    this.gridIcons.map((icon, i) => ({ id: i, icon }))
  );

  constructor() {
    afterNextRender(() => {
      this.playListAnimation();
      this.playGridAnimation();
    });
  }

  private playListAnimation(): void {
    const el = this.listEl();
    if (!el) return;
    const factory = this.builder.build([
      query('li', [
        style({ opacity: 0, transform: 'translateY(24px)' }),
        stagger(this.staggerDelay(), [
          animate('400ms cubic-bezier(0,0,0.2,1)',
            style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
      ], { optional: true }),
    ]);
    factory.create(el.nativeElement).play();
  }

  private playGridAnimation(): void {
    const el = this.gridEl();
    if (!el) return;
    const factory = this.builder.build([
      query('.grid-icon', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        stagger(60, [
          animate('350ms cubic-bezier(0.34,1.56,0.64,1)',
            style({ opacity: 1, transform: 'scale(1)' })),
        ]),
      ], { optional: true }),
    ]);
    factory.create(el.nativeElement).play();
  }

  addItem(): void {
    const id = this.nextId++;
    this._items.update(list => [
      ...list,
      {
        id,
        icon: 'bi-plus-circle',
        label: `Item ${id}`,
        description: 'Dynamically added with stagger animation.',
      },
    ]);
    setTimeout(() => {
      const el = this.listEl();
      if (!el) return;
      const lis = el.nativeElement.querySelectorAll('li');
      const last = lis[lis.length - 1] as HTMLElement | undefined;
      if (!last) return;
      const factory = this.builder.build([
        style({ opacity: 0, transform: 'translateY(24px)' }),
        animate('400ms cubic-bezier(0,0,0.2,1)',
          style({ opacity: 1, transform: 'translateY(0)' })),
      ]);
      factory.create(last).play();
    }, 0);
  }

  removeItem(id: number): void {
    this._items.update(list => list.filter(i => i.id !== id));
  }

  replayList(): void {
    const current = this._items();
    this._items.set([]);
    setTimeout(() => {
      this._items.set(current);
      setTimeout(() => this.playListAnimation(), 50);
    }, 50);
  }

  replayGrid(): void {
    const current = this.gridItems();
    this.gridItems.set([]);
    setTimeout(() => {
      this.gridItems.set(current);
      setTimeout(() => this.playGridAnimation(), 50);
    }, 50);
  }

  setDelay(d: number): void {
    this.staggerDelay.set(d);
  }
}
