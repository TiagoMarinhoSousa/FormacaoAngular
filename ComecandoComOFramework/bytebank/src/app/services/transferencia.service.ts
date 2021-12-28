import { Injectable } from '@angular/core';
//injectable pode ser invocado no construtor da classe appComponent
@Injectable({
  //declarado dessa maneira, enquanto a aplicação estiver ativa, esse service poderá ser invocado de qualquer módulo, ao contrario de por exemplo "provideIn: AppModule" que só poderia ser utilizado dentro desse módulo
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];

constructor() {
  this.listaTransferencia = [];
}
  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia)
    this.listaTransferencia.push(transferencia);
  }

  //regras de negócio
  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
