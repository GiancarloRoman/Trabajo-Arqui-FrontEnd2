import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-buscar',
  templateUrl: './cliente-buscar.component.html',
  styleUrls: ['./cliente-buscar.component.css']
})
export class ClienteBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.clienteService.buscar(e.target.value).subscribe(data => {
      this.clienteService.setLista(data);
    });
  }

}
