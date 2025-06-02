import { Component, OnInit } from '@angular/core';
import { SubjectListComponent } from '../subject-list/subject-list.component'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Review {
  name: string;
  location: string;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SubjectListComponent,  HttpClientModule, CommonModule],
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
      console.log(data)

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
