import { Routes } from '@angular/router';
import { Sangue } from './sangue/sangue';


export const routes: Routes = [
  { path: 'sangue', component: Sangue },
  { path: '', redirectTo: 'sangue', pathMatch: 'full' }
];
