import { NgClass, NgIf } from '@angular/common';
import { Component, output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

import { AccountMenuComponent } from '@shared/account-menu/account-menu.component';

@Component({
  selector: 'pc-core-header',
  imports: [NgIf, NgClass, InputTextModule, MenubarModule, AccountMenuComponent],
  templateUrl: './core-header.component.html',
  styleUrl: './core-header.component.scss',
})
export class CoreHeaderComponent {
  readonly openMenu = output<boolean>();

  private isMenuOpen = false;

  items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
    },
    {
      label: 'Features',
      icon: 'pi pi-star',
      shortcut: 'Shift+F',
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt',
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server',
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil',
        },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette',
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette',
            },
          ],
        },
      ],
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
    },
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.openMenu.emit(this.isMenuOpen);
  }
}
