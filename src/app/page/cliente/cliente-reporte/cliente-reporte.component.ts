import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';


@Component({
  selector: 'app-cliente-reporte',
  templateUrl: './cliente-reporte.component.html',
  styleUrls: ['./cliente-reporte.component.css']
})
export class ClienteReporteComponent implements OnInit {
  dataSource: MatTableDataSource<Cliente> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'cliente', 'email']
  constructor(private pService: ClienteService) { }

  ngOnInit(): void {
    this.pService.reporte().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
