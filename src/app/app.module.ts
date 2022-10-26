import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardInicioComponent } from "./components/dashboard-inicio/dashboard-inicio.component";

//Module Prime NG
import { PrimeNgModule } from "./prime-ng/prime-ng.module";
import { MiddleBoardComponent } from "./components/middle-board/middle-board.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BottomBoardComponent } from "./components/bottom-board/bottom-board.component";
import { CustomService } from "./services/custom.service";
import { NuevoOficioComponent } from "./components/nuevo-oficio/nuevo-oficio.component";
import { VerDetalleRequerimientoComponent } from "./components/ver-detalle-requerimiento/ver-detalle-requerimiento.component";
import { ContabilidadService } from "./services/contabilidad.service";
import { AuditoriaService } from "./services/auditorias.service";
import { ReqService } from "./services/req.service";
import { ColaborativoService } from "./services/colaborativo.service";
import { NotificacionesComponent } from "./components/notificaciones/notificaciones.component";
import { HubAvanceOficioComponent } from "./components/hub-avance-oficio/hub-avance-oficio.component";
import { HubColaborativoComponent } from "./components/hub-colaborativo/hub-colaborativo.component";
import { FormAuditoriaComponent } from "./components/form-auditoria/form-auditoria.component";
import { TableOficioComponent } from "./components/table-oficio/table-oficio.component";
import { AuditoriaComponent } from "./components/auditoria/auditoria.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { CalendarioAuditoriaComponent } from "./components/calendario-auditoria/calendario-auditoria.component";
import { DetalleAuditoriaComponent } from "./components/detalle-auditoria/detalle-auditoria.component";
import { CatalogosComponent } from "./components/catalogos/catalogos.component";

import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { HeaderComponent } from "./shared/header/header.component";
import { ModalesComponent } from "./shared/modales/modales.component";
import { DashboardColaboradorComponent } from "./components/dashboard-colaborador/dashboard-colaborador.component";
import { CardsComponent } from "./components/cards/cards.component";

// traslate
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { DetallePorAreaComponent } from './components/detalle-por-area/detalle-por-area.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DashboardInicioComponent,
    MiddleBoardComponent,
    BottomBoardComponent,
    NuevoOficioComponent,
    VerDetalleRequerimientoComponent,
    NotificacionesComponent,
    HubAvanceOficioComponent,
    HubColaborativoComponent,
    FormAuditoriaComponent,
    TableOficioComponent,
    AuditoriaComponent,
    CalendarComponent,
    CalendarioAuditoriaComponent,
    DetalleAuditoriaComponent,
    CatalogosComponent,
    HeaderComponent,
    ModalesComponent,
    DashboardColaboradorComponent,
    CardsComponent,
    DetallePorAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    NgDynamicBreadcrumbModule,
    TranslateModule.forRoot({
      defaultLanguage: "es",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ToastrModule.forRoot()
  ],
  providers: [
    CustomService,
    AuditoriaService,
    ContabilidadService,
    ColaborativoService,
    ReqService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
