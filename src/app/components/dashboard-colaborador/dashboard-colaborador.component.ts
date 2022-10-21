import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Auditoria } from "src/app/class/auditoriasClass";
import { TablaRequrimientos } from "src/app/interface/custom";
import { CustomService } from "src/app/services/custom.service";

// Dependencias para traducir a Español

import { TranslateService } from "@ngx-translate/core";
import { PrimeNGConfig } from "primeng/api";
import esLocale from "@fullcalendar/core/locales/es";
import { CalendarOptions } from "@fullcalendar/angular";

@Component({
  selector: "app-dashboard-colaborador",
  templateUrl: "./dashboard-colaborador.component.html",
  styles: [],
})
export class DashboardColaboradorComponent implements OnInit, AfterViewInit {
  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    locale: esLocale,
  };

  @Input() auditoria = new Auditoria({});
  req!: TablaRequrimientos[];
  value: number = 40;

  constructor(
    public customService: CustomService,
    public primengConfig: PrimeNGConfig,
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.customService.getRequerimiento().then((data) => (this.req = data));
  }

  ngAfterViewInit() {
    this.translateChange("es");
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
}
