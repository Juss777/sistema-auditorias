import { AfterViewInit, Component, Input, OnInit, HostListener } from "@angular/core";
import { Auditoria } from "src/app/class/auditoriasClass";
import { AdminTarea, Audito, ColaboTarea, TablaRequrimientos } from "src/app/interface/custom";
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
import { AppComponent } from '../../app.component';

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
  ejecutivo: boolean = false;
  admin: boolean = false;

  typeModal: string = "";
  displayTabla: boolean = false;
  headerModal: string = "";

  startEndDay: Date[] = [new Date("2022-11-15"), new Date("2022-11-20")];

  constructor(
    public auditoriaService: AuditoriaService,
    public customService: CustomService,
    public reqService: ReqService,
    public appComponent: AppComponent
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

  @HostListener('click', ['$event'])
  onClick(event: any) {   
    if (event.target.nodeName === 'SPAN' && event.target.classList[2] == 'p-monthpicker-month') {
      this.markDayStartAndFinish();
    }
  }

  ngOnInit(): void {
    this.fichaTecnica(this.auditorias[0]);
  }

  ngAfterViewInit() {    
    setTimeout(() => {
      this.markDayStartAndFinish();
      this.appComponent.traslateCalendarDashBoardInit();
    }, 200);
  }

  showModal(typeModal: string, headerModal: string) {
    this.headerModal = headerModal;
    this.typeModal = typeModal;
    this.displayTabla = true;
  }

  fichaTecnica(auditoria: any) {
    this.auditoriaSelected = auditoria;
  }

  cambioPAdm() {
    this.admin = true;
    this.colaborador = false;
    this.ejecutivo = false;
  }
  cambioPCol() {
    this.colaborador = true;
    this.ejecutivo = false;
    this.admin = false;
  }
  cambioPEje() {
    this.ejecutivo = true;
    this.colaborador = false;
    this.admin = false;
  }

  markDayStartAndFinish() {
    var d: any = document.getElementsByClassName("p-highlight");
    if (d.length > 0) {
      d[0].style.backgroundColor = "green";
      d[0].style.color = "white";
      d[d.length - 1].style.backgroundColor = "red";
      d[d.length - 1].style.color = "white";
    }
  }
}