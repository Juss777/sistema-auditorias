import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Auditoria } from "src/app/class/auditoriasClass";
import {
  AdminTarea,
  Audito,
  ColaboTarea,
  TablaRequrimientos,
} from "src/app/interface/custom";
import { Req } from "src/app/interface/req";
import { Task } from "src/app/interface/task";
import { AuditoriaService } from "src/app/services/auditorias.service";
import { CustomService } from "src/app/services/custom.service";
import { ReqService } from "src/app/services/req.service";

// Traducción de calendario a Español
import { TranslateService } from "@ngx-translate/core";
import { PrimeNGConfig } from "primeng/api";
import esLocale from "@fullcalendar/core/locales/es";
import { CalendarOptions } from "@fullcalendar/angular";

export interface IAuditoria {
  id?: number;
  relevancias: relevanciaAlerta;
}
export enum relevanciaAlerta {
  tituloInformativo = "Titulo Informativo",
  importante = "Importante",
  urgente = "Urgente",
}

@Component({
  selector: "app-dashboard-inicio",
  templateUrl: "./dashboard-inicio.component.html",
  styles: [
    `
      .exmaple {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        cursor: pointer;
        font-family: var(--main-font-regular);
        color: var(--color-negro);
      }
    `,
  ],
})
export class DashboardInicioComponent implements OnInit, AfterViewInit {
  tasks!: Task[];
  requerimiento!: Req[];
  req!: TablaRequrimientos[];
  adminTarea!: AdminTarea[];
  colaboTarea!: ColaboTarea[];

  auditoriaSelected = new Auditoria({});
  @Input() auditoria = new Auditoria({});
  @Input() auditorias: Auditoria[] = [];

  value: number = 40;
  colaborador: boolean = true;

  typeModal: string = "";
  displayTabla: boolean = false;
  headerModal: string = "";

  startEndDay: Date[] = [new Date("2022-10-13"), new Date("2022-10-25")];

  constructor(
    public auditoriaService: AuditoriaService,
    public customService: CustomService,
    public reqService: ReqService,
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService
  ) {
    // this.listAuditorias = auditoriaService.auditoriaDetalles;
    this.customService.getTasks().then((data) => (this.tasks = data));
    this.reqService.getRegistros().then((data) => (this.requerimiento = data));
    this.customService.getRequerimiento().then((data) => (this.req = data));
    this.customService.getAdminTarea().then((data) => (this.adminTarea = data));
    this.customService
      .getColaboTarea()
      .then((data) => (this.colaboTarea = data));

    this.auditorias = auditoriaService.auditoriaDetalles;
  }

  ngOnInit(): void {
    this.fichaTecnica(this.auditorias[0]);
  }

  ngAfterViewInit() {
    this.translateChange("es");
    setTimeout(() => {
      this.markDayStartAndFinish();
    }, 200);
  }

  translateChange(lang: string) {
    this.translateService.use(lang);
    this.translateService
      .get("primeng")
      .subscribe((res) => this.primengConfig.setTranslation(res));
  }

  showModal(typeModal: string, headerModal: string) {
    this.headerModal = headerModal;
    this.typeModal = typeModal;
    this.displayTabla = true;
  }

  fichaTecnica(auditoria: any) {
    console.log(auditoria);

    this.auditoriaSelected = auditoria;
  }

  cambioPAdm() {
    this.colaborador = true;
  }
  cambioPCol() {
    this.colaborador = false;
  }

  markDayStartAndFinish() {
    var d: any = document.getElementsByClassName("p-highlight");
    d[0].style.backgroundColor = "green";
    d[0].style.color = "white";
    d[d.length - 1].style.backgroundColor = "red";
    d[d.length - 1].style.color = "white";
  }
}
