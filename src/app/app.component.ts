import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'; 


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, HeaderComponent],
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
