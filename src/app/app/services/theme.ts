import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type AppTheme = 'midnight' | 'ocean' | 'sunset' | 'neon';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'ng-animate-theme';

  readonly currentTheme = signal<AppTheme>('midnight');

  constructor() {
    const saved = this.readStoredTheme();
    this.currentTheme.set(saved);
    this.applyTheme(saved);
  }

  setTheme(theme: AppTheme): void {
    this.currentTheme.set(theme);
    this.applyTheme(theme);
    this.persistTheme(theme);
  }

  private applyTheme(theme: AppTheme): void {
    this.document.documentElement.setAttribute('data-theme', theme);
  }

  private readStoredTheme(): AppTheme {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'midnight' || stored === 'ocean' || stored === 'sunset' || stored === 'neon') {
        return stored;
      }
    } catch {
      // Local storage may be unavailable in some environments.
    }

    return 'midnight';
  }

  private persistTheme(theme: AppTheme): void {
    try {
      localStorage.setItem(this.storageKey, theme);
    } catch {
      // Ignore persistence errors and keep runtime theme state only.
    }
  }
}
