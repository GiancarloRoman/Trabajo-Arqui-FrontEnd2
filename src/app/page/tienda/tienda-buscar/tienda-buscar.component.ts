import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/model/tienda';
import { TiendaService } from 'src/app/service/tienda.service';

@Component({
  selector: 'app-tienda-buscar',
  templateUrl: './tienda-buscar.component.html',
  styleUrls: ['./tienda-buscar.component.css']
})
export class TiendaBuscarComponent implements OnInit {

  constructor(private tiendaService: TiendaService) { }
  textoBuscar: string = ""
  ngOnInit(): void {
  }
  buscar(e: any) {/* buscar a BD */
    this.tiendaService.buscar(e.target.value).subscribe(data => {
      this.tiendaService.setLista(data);
    });
  }
}
