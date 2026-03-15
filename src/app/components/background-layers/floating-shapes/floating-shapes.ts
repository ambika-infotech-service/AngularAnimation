import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-floating-shapes',
  imports: [],
  templateUrl: './floating-shapes.html',
  styleUrl: './floating-shapes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingShapes {}
