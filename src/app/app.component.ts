import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, RouterLink],
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
      console.log(this.subjectData)
    });

    this.http.get('/assets/data/testimonials.json').subscribe((data) => {
      this.testimonialsData = data;
      console.log(this.testimonialsData)
    });

    
  }

 

}
