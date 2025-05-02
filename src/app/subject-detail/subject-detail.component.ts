import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-detail',
  standalone: true,
  imports: [],
  templateUrl: './subject-detail.component.html',
  styleUrl: './subject-detail.component.css'
})
export class SubjectDetailComponent implements OnInit {

  subjectId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.subjectId = this.route.snapshot.paramMap.get('id');
    console.log('Subject ID:', this.subjectId); 
  }



}
