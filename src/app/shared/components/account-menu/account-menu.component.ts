import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { MenuItem } from '@interfaces';

import { AvatarComponent } from '../avatar/avatar.component';
import { ACCOUNT_MENU_ITEMS } from './account-menu.constants';

@Component({
  selector: 'pc-account-menu',
  imports: [RouterModule, MatIconModule, MatMenuModule, AvatarComponent],
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss'],
})
export class AccountMenuComponent {
  menuItems: MenuItem[] = ACCOUNT_MENU_ITEMS;

  // TODO: remove this hardcoded value and get it from the BE
  userAvatar = 'https://avatar.iran.liara.run/username?username=Serhii+Maryniuk';
}
