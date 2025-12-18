import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { HeaderComponent } from './header/header.component'; 
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule, CommonModule, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  subjectData: any;
  testimonialsData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/data/subjects.json').subscribe((data) => {
      this.subjectData = data;
    });

    this.http.get('/assets/data/testimonials.json').subscribe((data) => {
      this.testimonialsData = data;
    });
  }
}
