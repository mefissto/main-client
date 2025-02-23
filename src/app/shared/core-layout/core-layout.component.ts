import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarCloseMode, SidebarOpenMode } from '@enums';
import { MenuItem } from '@interfaces';
import { CoreHeaderComponent } from '@shared/core-header/core-header.component';

import { CORE_LAYOUT_ROUTES } from './core-layout.constants';

@Component({
  selector: 'pc-core-layout',
  imports: [CoreHeaderComponent, RouterModule, RouterModule],
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
