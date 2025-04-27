import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarCloseMode, SidebarOpenMode } from '@enums';
import { CoreHeaderComponent } from '@shared/layout/core-header/core-header.component';

@Component({
  selector: 'pc-core-layout',
  imports: [CoreHeaderComponent, RouterModule, RouterModule],
  templateUrl: './core-layout.component.html',
  styleUrl: './core-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreLayoutComponent {
  openMode = input<SidebarOpenMode>(SidebarOpenMode.PUSH);
  closeMode = input<SidebarCloseMode>(SidebarCloseMode.ICONS);

  openModes = SidebarOpenMode;
  closeModes = SidebarCloseMode;

  isSidebarOpen = false;

  toggleSidebar(openMenu: boolean): void {
    console.log('toggleSidebar', openMenu);
    this.isSidebarOpen = openMenu;
  }
}
