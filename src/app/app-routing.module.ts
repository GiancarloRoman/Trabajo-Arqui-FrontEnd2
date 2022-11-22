import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './page/carrito-compras/carrito-compras.component';
import { CarritoCreaeditaComponent } from './page/carrito-compras/carrito-creaedita/carrito-creaedita.component';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ComprobanteCreaeditaComponent } from './page/comprobante-pago/comprobante-creaedita/comprobante-creaedita.component';
import { ComprobantePagoComponent } from './page/comprobante-pago/comprobante-pago.component';
import { MarcaCreaeditaComponent } from './page/marca/marca-creaedita/marca-creaedita.component';
import { MarcaComponent } from './page/marca/marca.component';
import { PrendaCreaeditaComponent } from './page/prenda/prenda-creaedita/prenda-creaedita.component';
import { PrendaComponent } from './page/prenda/prenda.component';
import { TallaCreaeditaComponent } from './page/talla/talla-creaedita/talla-creaedita.component';
import { TallaComponent } from './page/talla/talla.component';
import { TiendaCreaeditaComponent } from './page/tienda/tienda-creaedita/tienda-creaedita.component';
import { TiendaComponent } from './page/tienda/tienda.component';
import { ClienteReporteComponent } from './page/cliente/cliente-reporte/cliente-reporte.component';
import { PrendaReporteMayorComponent } from './page/prenda/prenda-reporte-mayor/prenda-reporte-mayor.component';
import { PrendaReporteMenorComponent } from './page/prenda/prenda-reporte-menor/prenda-reporte-menor.component';
import { PrendaReporteMarcaComponent } from './page/prenda/prenda-reporte-marca/prenda-reporte-marca.component';
import { ClienteReporteFrecuenciaComponent } from './page/cliente/cliente-reporte-frecuencia/cliente-reporte-frecuencia.component';
import { ComprobanteReporteFechaComponent } from './page/comprobante-pago/comprobante-reporte-fecha/comprobante-reporte-fecha.component';
import { ComprobanteReporteMontoComponent } from './page/comprobante-pago/comprobante-reporte-monto/comprobante-reporte-monto.component';

const routes: Routes = [{
  path: 'prendas', component: PrendaComponent, children: [
    { path: 'nuevo', component: PrendaCreaeditaComponent },
    { path: 'edicion/:id', component: PrendaCreaeditaComponent },
    { path: 'prendamayor', component: PrendaReporteMayorComponent },
    { path: 'prendamenor', component: PrendaReporteMenorComponent },
    {path:'prendamarca',component:PrendaReporteMarcaComponent}
  ]
}, {
  path: 'marcas', component: MarcaComponent, children: [
    { path: 'nuevo', component: MarcaCreaeditaComponent },
    { path: 'edicion/:id', component: MarcaCreaeditaComponent }
  ]
}, {
  path: 'tallas', component: TallaComponent, children: [
    { path: 'nuevo', component: TallaCreaeditaComponent },
    { path: 'edicion/:id', component: TallaCreaeditaComponent }
  ]
}, {
  path: 'clientes', component: ClienteComponent, children: [
    { path: 'nuevo', component: ClienteCreaeditaComponent },
    { path: 'edicion/:id', component: ClienteCreaeditaComponent },
    { path: 'reportes', component: ClienteReporteComponent },
    {path:'frecuencia',component:ClienteReporteFrecuenciaComponent}
  
  ]

}, {
  path: 'tiendas', component: TiendaComponent, children: [
    { path: 'nuevo', component: TiendaCreaeditaComponent },
    { path: 'edicion/:id', component: TiendaCreaeditaComponent }
  ]
}, {
  path: 'carrito_compras', component: CarritoComprasComponent, children: [
    { path: 'nuevo', component: CarritoCreaeditaComponent },
    { path: 'edicion/:id', component: CarritoCreaeditaComponent }
  ]
}, {
  path: 'comprobante_pago', component: ComprobantePagoComponent, children: [
    { path: 'nuevo', component: ComprobanteCreaeditaComponent },
    { path: 'edicion/:id', component: ComprobanteCreaeditaComponent },
    {path:'comprobanteFecha',component:ComprobanteReporteFechaComponent},
    {path:'comprobanteMonto',component:ComprobanteReporteMontoComponent},
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
