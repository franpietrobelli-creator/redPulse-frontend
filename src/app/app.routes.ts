import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SangueComponent } from './sangue/sangue';
import { BolsasListagemComponent } from './bolsas-listagem/bolsas-listagem';
import { Doadores } from './doadores/doadores';
import { Hospitais } from './hospitais/hospitais';
import { Medicos } from './medicos/medicos';
import { Perfil } from './perfil/perfil';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home',      component: HomeComponent },
  { path: 'sangue',    component: SangueComponent },
  { path: 'bolsas',    component: BolsasListagemComponent },
  { path: 'doadores',  component: Doadores },
  { path: 'hospitais', component: Hospitais },
  { path: 'medicos',   component: Medicos },
  { path: 'perfil',    component: Perfil },

  { path: '**', redirectTo: 'home' }
];