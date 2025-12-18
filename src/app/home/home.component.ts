import { Component, OnInit } from '@angular/core';
import { SubjectListComponent } from '../subject-list/subject-list.component'; 
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Review {
  name: string;
  location: string;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SubjectListComponent,  
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reviews: Review[] = [];
  currentReviewIndex = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Review[]>('/assets/data/testimonials.json').subscribe((data) => {
      this.reviews = data;

      data.forEach(review => {
        if (review.name == "") {
          review.name = "anonymous"
        }
      });

      setInterval(() => {
        this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
      }, 10000);
    });
  }
}
