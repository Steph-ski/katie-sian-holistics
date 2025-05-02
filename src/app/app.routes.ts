import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'subject/:id', component: SubjectDetailComponent },  
];