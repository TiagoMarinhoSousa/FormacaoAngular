import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.models';
//injectable pode ser invocado no construtor da classe appComponent
@Injectable({

  providedIn: 'root'
  //declarado dessa maneira, enquanto a aplicação estiver ativa, esse service poderá ser invocado de qualquer módulo, ao contrario de por exemplo "provideIn: AppModule" que só poderia ser utilizado dentro desse módulo
})
export class TransferenciaService {
  private listaTransferencia: any[];

//
// constructor() {
//   this.listaTransferencia = [];
// }

//aula 6 - consumindo API Rest

private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = [];
}
  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  // adicionar(transferencia: any) {
  //   this.hidratar(transferencia)
  //   this.listaTransferencia.push(transferencia);
  // }

  //aula 6.5 - API Rest - HttpClient

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  //regras de negócio
  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
