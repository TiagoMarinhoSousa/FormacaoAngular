import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  //Aula 6.5 http
  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferência');
    // const valorEmitir = {valor: this.valor, destino: this.destino};
    // this.aoTransferir.emit(valorEmitir);
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
    //this.limparCampos();
  }

  limparCampos(){
    this.valor = null ;
    this.destino = null;
  }
}
