import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppTheme, ThemeService } from '../../app/services/theme';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  readonly themeService = inject(ThemeService);
  readonly menuOpen = signal(false);

  readonly themes: ReadonlyArray<{ value: AppTheme; label: string }> = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'sunset', label: 'Sunset' },
    { value: 'neon', label: 'Neon' },
  ];

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  onThemeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    if (value === 'ocean' || value === 'sunset' || value === 'neon') {
      this.themeService.setTheme(value);
    }
  }

  readonly navLinks = [
    { path: '/',             label: 'Home',        icon: 'bi-house-fill' },
    { path: '/fade',         label: 'Fade',        icon: 'bi-eye-fill' },
    { path: '/slide',        label: 'Slide',       icon: 'bi-arrows-move' },
    { path: '/stagger',      label: 'Stagger',     icon: 'bi-list-ul' },
    { path: '/keyframe',     label: 'Keyframe',    icon: 'bi-stars' },
    { path: '/backgrounds',  label: 'Backgrounds', icon: 'bi-layers-fill' },
  ];
}
