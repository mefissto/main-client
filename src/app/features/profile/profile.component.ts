import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from '@shared/layout/side-menu/side-menu.component';

import { PROFILE_SIDE_MENU } from './profile.constants';

@Component({
  selector: 'pc-profile',
  imports: [SideMenuComponent, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  protected sideMenu = PROFILE_SIDE_MENU;
}
