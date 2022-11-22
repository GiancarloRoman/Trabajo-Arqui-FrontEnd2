import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { Carrito_Compras } from '../model/carrito_compras';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  url: string = "http://localhost:8080/carrito_de_compras";
  private listacambio = new Subject<Carrito_Compras[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Carrito_Compras[]>(this.url);
  }
  insertar(carrito: Carrito_Compras) {
    return this.http.post(this.url, carrito);
  }
  setLista(listaNueva: Carrito_Compras[]) {
    this.listacambio.next(listaNueva);
  }
  getLista() {
    return this.listacambio.asObservable();
  }
  modifcar(carrito: Carrito_Compras) {
    return this.http.put(this.url, carrito);
  }
  listarId(id: number) {
    return this.http.get<Carrito_Compras>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado)
  }
  buscar(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Carrito_Compras[]>(`${this.url}/buscarprenda`, texto.toLowerCase());
    }
    return EMPTY;
  }
    reporte() {
    return this.http.get<Cliente[]>(`${this.url}/buscardominio`);
  }
  clientefrecuente() {
    return this.http.get<ClienteFrecuente[]>(`${this.url}/clientefrecuente`);
  }
}

