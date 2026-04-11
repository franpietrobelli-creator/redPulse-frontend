import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceBolsas {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/bolsas';

  listar(){
    return this.http.get<any[]>(this.apiUrl);
  }
}