import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add this
import { RouterModule } from '@angular/router'; // If you're using routing

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
    // Get the subject from router state
    this.subject = history.state.subject;
    
    if (!this.subject) {
      console.error('Subject not found!');
      // Optionally handle the error here (e.g. redirect or show an error message)
    }
    console.log('Loaded subject:', this.subject);
  }



}
