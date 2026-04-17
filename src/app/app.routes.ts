import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SangueComponent } from './sangue/sangue';
import { BolsasListagemComponent } from './bolsas-listagem/bolsas-listagem';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home',   component: HomeComponent },
  { path: 'sangue', component: SangueComponent },
  { path: 'bolsas', component: BolsasListagemComponent },

  { path: '**', redirectTo: 'home' }
];