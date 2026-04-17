import { Component } from '@angular/core';

@Component({
  selector: 'app-sangue',
  standalone: true,
  template: `
    <div class="page">
      <h2>Doe Sangue</h2>
      <p class="desc">Sua doação pode salvar até 4 vidas. Veja os pontos de coleta mais próximos.</p>
      <div class="list-item">
        <div class="name">Hemocentro de Cascavel</div>
        <div class="info">Rua das Flores, 100 · Aberto agora</div>
      </div>
      <div class="list-item">
        <div class="name">Hemocentro de Toledo</div>
        <div class="info">Av. Parigot de Souza, 50 · Aberto agora</div>
      </div>
      <div class="list-item">
        <div class="name">Hemorrede Curitiba</div>
        <div class="info">Rua do Sangue, 200 · Abre às 07h</div>
      </div>
    </div>
  `,
  styles: [`
    .page { padding: 24px 20px; }
    h2 { font-size: 20px; font-weight: 700; color: #E53935; margin-bottom: 8px; }
    .desc { font-size: 13px; color: #666; margin-bottom: 20px; }
    .list-item { background: #fff; border-radius: 12px; padding: 12px 14px; margin-bottom: 8px; border: 0.5px solid #eee; }
    .name { font-size: 13px; font-weight: 600; color: #1a1a1a; }
    .info { font-size: 11px; color: #999; margin-top: 3px; }
  `]
})
export class SangueComponent {}