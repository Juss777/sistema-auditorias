import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardInicioComponent } from "./components/dashboard-inicio/dashboard-inicio.component";
import { HubAvanceOficioComponent } from "./components/hub-avance-oficio/hub-avance-oficio.component";
import { HubColaborativoComponent } from "./components/hub-colaborativo/hub-colaborativo.component";
import { NotificacionesComponent } from "./components/notificaciones/notificaciones.component";
import { NuevoOficioComponent } from "./components/nuevo-oficio/nuevo-oficio.component";
import { VerDetalleRequerimientoComponent } from "./components/ver-detalle-requerimiento/ver-detalle-requerimiento.component";
import { AuditoriaComponent } from "./components/auditoria/auditoria.component";
import { CalendarioAuditoriaComponent } from "./components/calendario-auditoria/calendario-auditoria.component";
import { DetalleAuditoriaComponent } from "./components/detalle-auditoria/detalle-auditoria.component";
import { DetallePorAreaComponent } from "./components/detalle-por-area/detalle-por-area.component";
import { TableroComponent } from "./components/tablero/tablero.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const routes: Routes = [
  {
    path: "",
    component: TableroComponent,
  },
  {
    path: "dashboard",
    component: DashboardInicioComponent,
    data: {
      breadcrumb: [
        {
          label: "Tablero de control",
          url: "/",
        },
        {
          label: "Dashboard",
          url: "/dashboard",
        },
      ],
    },
  },
  {
    path: "detalle-auditoria/:id",
    component: DetalleAuditoriaComponent,
    data: {
      breadcrumb: [
        {
          label: "Tablero de control",
          url: "/",
        },
        {
          label: "Dashboard",
          url: "/dashboard",
        },
        {
          label: "Ficha técnica",
          url: "",
        },
      ],
    },
  },
  {
    path: "auditoria/:id/:isReading/:sectionId",
    component: AuditoriaComponent,
    data: {
      breadcrumb: [
        {
          label: "Dashboard",
          url: "/dashboard",
        },
        {
          label: "Ficha técnica",
          url: "/detalle-auditoria/:id",
        },
        {
          label: "Nueva auditoria",
          url: "",
        },
      ],
    },
  },
  {
    path: "hub-colaborativo",
    component: HubColaborativoComponent,
    data: {
      breadcrumb: [
        {
          label: "Dashboard",
          url: "/dashboard",
        },
        {
          label: "HUB colaborativo",
          url: "",
        },
      ],
    },
  },
  {
    path: "ver-detalle",
    component: VerDetalleRequerimientoComponent,
    data: {
      breadcrumb: [
        {
          label: "Dashboard",
          url: "/dashboard",
        },
        {
          label: "HUB colaborativo",
          url: "/hub-colaborativo",
        },
        {
          label: "Tareas",
          url: "",
        },
        {
          label: "Detalle de tarea",
          url: "hub-colaborativo",
        },
      ],
    },
  },
  { path: "buscador", component: BuscadorComponent },

  { path: "detalle-por-area", component: DetallePorAreaComponent },
  { path: "nuevo-oficio", component: NuevoOficioComponent },
  {
    path: "notificacion",
    component: NotificacionesComponent,
  },
  {
    path: "hub-avance",
    component: HubAvanceOficioComponent,
  },
  {
    path: "calendario-auditoria/:id",
    component: CalendarioAuditoriaComponent,
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
