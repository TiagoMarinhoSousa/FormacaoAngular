import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // transferencias: any[];

  //aula 6.4

  transferencias?: Observable<Transferencia[]>
  constructor(private service: TransferenciaService) { }

  // ngOnInit() {
  //   this.transferencias = this.service.transferencias;
  // }

  //consumindo api rest

  // ngOnInit() {
  //   this.service.todas().subscribe((transferencias: Transferencia[]) => {
  //     console.table(transferencias);
  //     this.transferencias = transferencias;
  //   });


  //aula 6.4
  ngOnInit() {
    this.transferencias = this.service.todas();
  }
}

