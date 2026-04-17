import { Component } from '@angular/core';

@Component({
  selector: 'app-bolsas-listagem',
  standalone: true,
  template: `
    <div class="page">
      <h2>Bolsas de Sangue</h2>
      <div class="list-item">
        <div class="name">Bolsa #001 · A+</div>
        <div class="info">Hospital das Clínicas · Válida até 10/05/2026</div>
      </div>
      <div class="list-item">
        <div class="name">Bolsa #002 · O-</div>
        <div class="info">Santa Casa · Válida até 15/05/2026</div>
      </div>
      <div class="list-item">
        <div class="name">Bolsa #003 · B+</div>
        <div class="info">Hospital Regional · Válida até 20/05/2026</div>
      </div>
    </div>
  `,
  styles: [`
    .page { padding: 24px 20px; }
    h2 { font-size: 20px; font-weight: 700; color: #1a1a1a; margin-bottom: 16px; }
    .list-item { background: #fff; border-radius: 12px; padding: 12px 14px; margin-bottom: 8px; border: 0.5px solid #eee; }
    .name { font-size: 13px; font-weight: 600; color: #1a1a1a; }
    .info { font-size: 11px; color: #999; margin-top: 3px; }
  `]
})
export class BolsasListagemComponent {}