import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({  
  selector: 'app-subject-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './subject-detail.component.html',
  styleUrl: './subject-detail.component.css'
})
export class SubjectDetailComponent implements OnInit {

  subject: any;
  private sub!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subject = history.state.subject;
    
    if (!this.subject) {
      console.error('Subject not found!');
    }

        this.sub = this.route.paramMap.subscribe(() => {
      setTimeout(() => {
        const nav = document.querySelector('.header') as HTMLElement | null; 
        const navHeight = nav ? nav.offsetHeight : 80; 
        const topEl = document.getElementById('top');

        if (topEl) {
          topEl.style.scrollMarginTop = `${navHeight}px`;
          topEl.scrollIntoView({ behavior: 'auto', block: 'start' });
        } else {
          window.scrollTo({ top: navHeight, behavior: 'auto' });
        }
      }, 0);
    });    
  }

    ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }



}
