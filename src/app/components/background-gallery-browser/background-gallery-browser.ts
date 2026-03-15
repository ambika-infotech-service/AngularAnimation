import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BACKGROUND_GALLERY_ITEMS,
  BackgroundFilter,
  buildLayeredSnippet,
  getBackgroundFilterLabel,
} from '../../data/background-gallery.data';

@Component({
  selector: 'app-background-gallery-browser',
  imports: [NgComponentOutlet, RouterLink],
  templateUrl: './background-gallery-browser.html',
  styleUrl: './background-gallery-browser.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundGalleryBrowser {
  readonly activeFilter = input<BackgroundFilter>('all');
  readonly searchTerm = signal('');
  readonly copiedSlug = signal<string | null>(null);
  readonly backgrounds = BACKGROUND_GALLERY_ITEMS;

  readonly filterLabel = computed(() => getBackgroundFilterLabel(this.activeFilter()));

  readonly filteredBackgrounds = computed(() => {
    const filter = this.activeFilter();
    const query = this.searchTerm().trim().toLowerCase();

    return this.backgrounds.filter(background => {
      const matchesFilter = filter === 'all' || filter === 'mixed' || background.category === filter;
      if (!matchesFilter) {
        return false;
      }

      if (!query) {
        return true;
      }

      const searchableParts = [
        background.name,
        background.selector,
        background.summary,
        background.detail,
        background.category,
        ...background.tags,
        ...background.useCases,
      ];

      return searchableParts.join(' ').toLowerCase().includes(query);
    });
  });

  setSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  buildSnippet(selector: string): string {
    return buildLayeredSnippet(selector);
  }

  copySnippet(slug: string, selector: string): void {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    void navigator.clipboard.writeText(this.buildSnippet(selector)).then(() => {
      this.copiedSlug.set(slug);
      window.setTimeout(() => {
        if (this.copiedSlug() === slug) {
          this.copiedSlug.set(null);
        }
      }, 1800);
    });
  }
}
