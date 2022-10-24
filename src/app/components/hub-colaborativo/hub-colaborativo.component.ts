import { Component, Input, OnInit } from "@angular/core";
import { AuditoriaService } from "src/app/services/auditorias.service";
import { Colaborativo } from "src/app/interface/colaborativo";
import { ColaborativoService } from "src/app/services/colaborativo.service";
import { ReqService } from "src/app/services/req.service";
import { Req } from "src/app/interface/req";
import { Auditoria } from "src/app/class/auditoriasClass";
import { CustomService } from "src/app/services/custom.service";
import { Desahogo, DesahogoList } from "src/app/interface/custom";

@Component({
  selector: "app-hub-colaborativo",
  templateUrl: "./hub-colaborativo.component.html",
  styles: [],
})
export class HubColaborativoComponent implements OnInit {
  colaborativo!: Colaborativo[];
  requerimiento!: Req[];
  desahogo!: Desahogo[];

  displayModal: boolean = false;
  // displayDesahogoTabla: boolean = false;
  typeModal: string = "";
  headerModal: string = "";

  @Input() auditoria = new Auditoria({});

  constructor(
    public colaborativoService: ColaborativoService,
    public auditoriaService: AuditoriaService,
    public reqService: ReqService,
    public customService: CustomService
  ) {}

  ngOnInit(): void {
    this.colaborativoService
      .getTasks()
      .then((data) => (this.colaborativo = data));
    this.reqService.getRegistros().then((data) => (this.requerimiento = data));
    this.customService.getDesahogo().then((data) => (this.desahogo = data));
  }

  showModal(typeModal: string, headerModal: string) {
    this.headerModal = headerModal;
    this.typeModal = typeModal;
    this.displayModal = true;
  }

  countChars: number = 0;
  isMax: boolean = false;
  maxCharacters: number = 250;
  countCharacters(event: any) {
    this.countChars = event.target.value.length;
    if (this.countChars === this.maxCharacters) {
      this.isMax = true;
    } else {
      this.isMax = false;
    }
  }
}
