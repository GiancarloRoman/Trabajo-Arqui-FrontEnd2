import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/model/marca';
import { MarcaService } from 'src/app/service/marca.service';

@Component({
  selector: 'app-marca-buscar',
  templateUrl: './marca-buscar.component.html',
  styleUrls: ['./marca-buscar.component.css']
})
export class MarcaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private marcaService: MarcaService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {/* buscar a BD */
    this.marcaService.buscar(e.target.value).subscribe(data => {
      this.marcaService.setLista(data);
    });
  }
}
