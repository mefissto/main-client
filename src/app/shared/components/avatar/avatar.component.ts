import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AvatarSize } from './avatar-models';

@Component({
  selector: 'pc-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  readonly imageSrc = input.required<string>();
  readonly altText = input.required<string>();
  readonly size = input<AvatarSize>('medium');
}
