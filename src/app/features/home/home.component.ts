import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pc-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
