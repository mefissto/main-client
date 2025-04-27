import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelMenu } from 'primeng/panelmenu';
import { Ripple } from 'primeng/ripple';

import { MenuItem } from '@interfaces';

@Component({
  selector: 'pc-side-menu',
  imports: [PanelMenu, NgIf, Ripple, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  readonly menuItems = input.required<MenuItem[]>();
}
