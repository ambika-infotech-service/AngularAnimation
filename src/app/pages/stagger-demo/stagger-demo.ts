import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

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
  }

  removeItem(id: number): void {
    this._items.update(list => list.filter(i => i.id !== id));
  }

  replayList(): void {
    const current = this._items();
    this._items.set([]);
    setTimeout(() => {
      this._items.set(current);
    }, 50);
  }

  replayGrid(): void {
    const current = this.gridItems();
    this.gridItems.set([]);
    setTimeout(() => {
      this.gridItems.set(current);
    }, 50);
  }

  setDelay(d: number): void {
    this.staggerDelay.set(d);
  }
}
