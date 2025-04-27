import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { AccountMenuComponent } from '@shared/components/account-menu/account-menu.component';

@Component({
  selector: 'pc-core-header',
  imports: [AccountMenuComponent, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './core-header.component.html',
  styleUrl: './core-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreHeaderComponent {
  readonly openMenu = output<boolean>();

  private isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.openMenu.emit(this.isMenuOpen);
  }
}
