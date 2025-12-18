import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
  imports: [CommonModule, RouterModule, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule]
})
export class SubjectListComponent implements OnInit {
 subjects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/data/subjects.json').subscribe((data) => {
      this.subjects = data;
    });
  }
}