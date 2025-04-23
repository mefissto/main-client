import { Component } from '@angular/core';

import { SideMenuComponent } from '@shared/side-menu/side-menu.component';

import { PROFILE_SIDE_MENU } from './profile.constants';

@Component({
  selector: 'pc-profile',
  imports: [SideMenuComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  protected sideMenu = PROFILE_SIDE_MENU;
}
