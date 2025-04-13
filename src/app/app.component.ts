import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  subjectData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/data/subjects.json').subscribe((data) => {
      this.subjectData = data;
      console.log(this.subjectData)
    });

    
  }




}
