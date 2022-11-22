import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PrendaService } from 'src/app/service/prenda.service';
import { Mayor } from 'src/app/model/mayor';

@Component({
  selector: 'app-prenda-reporte-mayor',
  templateUrl: './prenda-reporte-mayor.component.html',
  styleUrls: ['./prenda-reporte-mayor.component.css']
})
export class PrendaReporteMayorComponent implements OnInit {
  lista: Mayor[] = [];
  dataSource: MatTableDataSource<Mayor> = new MatTableDataSource();
  displayedColumns: string[] = ['prenda', 'precio'];
  constructor(private pService: PrendaService) { }

  ngOnInit(): void {
    this.pService.reportemayor().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
