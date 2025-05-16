import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'subject/:id', component: SubjectDetailComponent },  
];