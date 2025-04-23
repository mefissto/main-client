import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';

import { ACCOUNT_MENU_ITEMS } from './account-menu.constants';

@Component({
  selector: 'pc-account-menu',
  imports: [RouterModule, AvatarModule, MenuModule],
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss'],
})
export class AccountMenuComponent {
  menuItems: MenuItem[] = ACCOUNT_MENU_ITEMS;
}
