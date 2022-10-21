import { Component, Input, OnInit } from "@angular/core";
import { Auditoria } from "src/app/class/auditoriasClass";
import { AuditoriaService } from "src/app/services/auditorias.service";

@Component({
  selector: "app-dashboard-inicio",
  templateUrl: "./dashboard-inicio.component.html",
})
export class DashboardInicioComponent implements OnInit {
  @Input() auditoria!: IAuditoria;

  listAuditorias: Auditoria[] = [];

  auditoriaSelected = new Auditoria({});

  constructor(public auditoriaService: AuditoriaService) {
    this.listAuditorias = auditoriaService.auditoriaDetalles;
  }

  ngOnInit(): void {
    this.fichaTecnica(this.listAuditorias[0]);
  }

  fichaTecnica(auditoria: any) {
    this.auditoriaSelected = auditoria;

    // this.auditoriaService.auditorias.forEach((element) => {
    //   element.active = false;
    // });
    // this.auditoriaService.auditorias[
    //   this.auditoriaService.auditorias.indexOf(auditoria)
    // ].active = true;
    // this.auditoriaService.tituloFicha =
    //   this.auditoriaService.auditorias[
    //     this.auditoriaService.auditorias.indexOf(auditoria)
    //   ].content;
    // this.auditoriaService.tipoDetalle =
    //   this.auditoriaService.auditorias[
    //     this.auditoriaService.auditorias.indexOf(auditoria)
    //   ].tipoCard;
    // this.auditoriaService.fichaActive =
    //   this.auditoriaService.auditorias[
    //     this.auditoriaService.auditorias.indexOf(auditoria)
    //   ].active;
    // this.auditoriaService.noFicha = false;
    // this.auditoriaService.verFicha = true;
    // this.auditoriaService.active = !this.auditoriaService.active;
  }
}
export interface IAuditoria {
  id?: number;
  relevancias: relevanciaAlerta;
}
export enum relevanciaAlerta {
  tituloInformativo = "Titulo Informativo",
  importante = "Importante",
  urgente = "Urgente",
}
