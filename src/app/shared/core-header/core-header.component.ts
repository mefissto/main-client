import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AccountMenuComponent } from '@shared/account-menu/account-menu.component';

@Component({
  selector: 'pc-core-header',
  imports: [MatIconModule, MatToolbarModule, AccountMenuComponent],
  templateUrl: './core-header.component.html',
  styleUrl: './core-header.component.scss',
})
export class CoreHeaderComponent {
  readonly openMenu = output<boolean>();

  private isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.openMenu.emit(this.isMenuOpen);
  }
}
