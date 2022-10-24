import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Auditoria } from "src/app/class/auditoriasClass";
import { Audito, TablaRequrimientos } from "src/app/interface/custom";
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

  auditoriaSelected = new Auditoria({});
  @Input() auditoria = new Auditoria({});

  value: number = 40;
  colaborador: boolean = true;

  typeModal: string = "";
  displayTabla: boolean = false;
  headerModal: string = "";

  startEndDay: Date[] = [new Date('2022-10-13'), new Date('2022-10-25')]

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
  }

  ngOnInit(): void {
    // this.fichaTecnica(this.listAuditorias[0]);
  }

  ngAfterViewInit() {
    this.translateChange("es");
    setTimeout(() =>{
      this.markDayStartAndFinish();
    }, 200)
  }

  translateChange(lang: string) {
    this.translateService.use(lang);
    this.translateService
      .get("primeng")
      .subscribe((res) => this.primengConfig.setTranslation(res));
  }

  pending = [
    {
      id: 1,
      name: "Subir comprobantes 2016",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 2,
      name: "Subir balanza de pagos",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 3,
      name: "Revisar trabajo",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 4,
      name: "Vaciar datos",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 5,
      name: "Vaciar datos BAZ 2016",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
  ];

  pendings = [
    {
      id: 1,
      name: "Revisar balanza",
      dias: "1",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 2,
      name: "Revisar fecha oficio",
      dias: "3",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 3,
      name: "Terminar oficio",
      dias: "10",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 4,
      name: "Subir Balanza",
      dias: "20",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 5,
      name: "Subir tickets",
      dias: "12",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
  ];

  showModal(typeModal: string, headerModal: string) {
    this.headerModal = headerModal;
    this.typeModal = typeModal;
    this.displayTabla = true;
  }

  fichaTecnica(auditoria: any) {
    this.auditoriaSelected = auditoria;
  }

  cambioPAdm() {
    this.colaborador = true;
  }
  cambioPCol() {
    this.colaborador = false;
  }

  markDayStartAndFinish(){
    var d: any = document.getElementsByClassName('p-highlight');
    d[0].style.backgroundColor = 'green';
    d[0].style.color = 'white';
    d[d.length-1].style.backgroundColor = 'red';
    d[d.length-1].style.color = 'white';
  }
}
