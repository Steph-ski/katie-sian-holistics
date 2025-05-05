import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
  imports: [CommonModule, RouterModule, HttpClientModule]
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