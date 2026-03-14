import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  readonly navLinks = [
    { path: '/',         label: 'Home',     icon: 'bi-house-fill' },
    { path: '/fade',     label: 'Fade',     icon: 'bi-eye-fill' },
    { path: '/slide',    label: 'Slide',    icon: 'bi-arrows-move' },
    { path: '/stagger',  label: 'Stagger',  icon: 'bi-list-ul' },
    { path: '/keyframe', label: 'Keyframe', icon: 'bi-stars' },
  ];
}
