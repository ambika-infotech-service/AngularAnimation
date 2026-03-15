import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import {
  buildLayeredSnippet,
  buildMinimalSnippet,
  findBackgroundBySlug,
  getBackgroundFilterLabel,
} from '../../data/background-gallery.data';

@Component({
  selector: 'app-background-detail',
  imports: [NgComponentOutlet, RouterLink],
  templateUrl: './background-detail.html',
  styleUrl: './background-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('slug'))),
    { initialValue: null },
  );

  readonly copiedKey = signal<string | null>(null);
  readonly background = computed(() => findBackgroundBySlug(this.slug()));
  readonly categoryLabel = computed(() => {
    const background = this.background();
    return background ? getBackgroundFilterLabel(background.category) : '';
  });
  readonly minimalSnippet = computed(() => {
    const background = this.background();
    return background ? buildMinimalSnippet(background.selector) : '';
  });
  readonly layeredSnippet = computed(() => {
    const background = this.background();
    return background ? buildLayeredSnippet(background.selector) : '';
  });

  copySnippet(key: string, snippet: string): void {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    void navigator.clipboard.writeText(snippet).then(() => {
      this.copiedKey.set(key);
      window.setTimeout(() => {
        if (this.copiedKey() === key) {
          this.copiedKey.set(null);
        }
      }, 1800);
    });
  }
}
