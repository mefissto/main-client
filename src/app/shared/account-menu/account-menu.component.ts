import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { NgFor } from '@angular/common';
import { ACCOUNT_MENU_ITEMS } from './account-menu.constants';
import { AccountMenuItem } from './account-menu.models';

@Component({
  selector: 'pc-account-menu',
  imports: [MatIconModule, MatMenuModule, NgFor],
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss'],
})
export class AccountMenuComponent {
  menuItems: AccountMenuItem[] = ACCOUNT_MENU_ITEMS;
}
