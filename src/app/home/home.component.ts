import { Component } from '@angular/core';
import { SubjectListComponent } from '../subject-list/subject-list.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SubjectListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
