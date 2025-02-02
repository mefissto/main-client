import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { MenuItem } from '@core/interfaces/menu-item.interface';

import { ACCOUNT_MENU_ITEMS } from './account-menu.constants';

@Component({
  selector: 'pc-account-menu',
  imports: [MatIconModule, MatMenuModule, NgFor, RouterModule],
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss'],
})
export class AccountMenuComponent {
  menuItems: MenuItem[] = ACCOUNT_MENU_ITEMS;
}
