import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pc-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    // TODO: remove it
    this.http.get('http://localhost:3000/api/users').subscribe((data) => {
      console.log(data);
    });
  }
}
