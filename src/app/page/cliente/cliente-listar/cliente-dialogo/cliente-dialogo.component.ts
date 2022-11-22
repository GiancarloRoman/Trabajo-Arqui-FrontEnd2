import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-dialogo',
  templateUrl: './cliente-dialogo.component.html',
  styleUrls: ['./cliente-dialogo.component.css']
})
export class ClienteDialogoComponent implements OnInit {

  constructor(private clienteService:ClienteService,
    private dialogRef:MatDialogRef<ClienteDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.clienteService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
