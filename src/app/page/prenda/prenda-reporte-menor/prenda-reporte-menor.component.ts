import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PrendaService } from 'src/app/service/prenda.service';
import { Menor } from 'src/app/model/menor';

@Component({
  selector: 'app-prenda-reporte-menor',
  templateUrl: './prenda-reporte-menor.component.html',
  styleUrls: ['./prenda-reporte-menor.component.css']
})
export class PrendaReporteMenorComponent implements OnInit {
  lista: Menor[] = [];
  dataSource: MatTableDataSource<Menor> = new MatTableDataSource();
  displayedColumns: string[] = ['prenda', 'precio'];
  constructor(private pService: PrendaService) { }

  ngOnInit(): void {
    this.pService.reportemenor().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
