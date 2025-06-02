import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({  
  selector: 'app-subject-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './subject-detail.component.html',
  styleUrl: './subject-detail.component.css'
})
export class SubjectDetailComponent implements OnInit {

  subject: any;

  ngOnInit() {
    this.subject = history.state.subject;
    
    if (!this.subject) {
      console.error('Subject not found!');
    }
    console.log('Loaded subject:', this.subject);
  }



}
