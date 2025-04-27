import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pc-pets',
  imports: [],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsComponent {}
