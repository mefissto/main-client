import { NgClass, NgFor } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SidebarCloseMode, SidebarOpenMode } from '@enums/sidebar-mode.enum';
import { MenuItem } from '@interfaces/menu-item.interface';
import { CoreHeaderComponent } from '@shared/core-header/core-header.component';

import { CORE_LAYOUT_ROUTES } from './core-layout.constants';

@Component({
  selector: 'pc-core-layout',
  imports: [CoreHeaderComponent, RouterModule, NgClass, NgFor, RouterModule, MatIconModule],
  templateUrl: './core-layout.component.html',
  styleUrl: './core-layout.component.scss',
})
export class CoreLayoutComponent {
  openMode = input<SidebarOpenMode>(SidebarOpenMode.PUSH);
  closeMode = input<SidebarCloseMode>(SidebarCloseMode.ICONS);

  openModes = SidebarOpenMode;
  closeModes = SidebarCloseMode;

  protected menuItems: MenuItem[] = CORE_LAYOUT_ROUTES;

  isSidebarOpen = false;

  toggleSidebar(openMenu: boolean): void {
    console.log('toggleSidebar', openMenu);
    this.isSidebarOpen = openMenu;
  }
}
