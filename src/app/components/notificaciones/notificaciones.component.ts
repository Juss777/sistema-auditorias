import { Component, OnInit } from "@angular/core";
import { Req } from "src/app/interface/req";
import { AuditoriaService } from "src/app/services/auditorias.service";
import { ReqService } from "src/app/services/req.service";

@Component({
  selector: "app-notificaciones",
  templateUrl: "./notificaciones.component.html",
  styles: [],
})
export class NotificacionesComponent implements OnInit {
  requerimiento!: Req[];
  displayModal: boolean = false;
  typeModal: string = "";
  headerModal: string = "";

  constructor(
    public auditoriaService: AuditoriaService,
    public reqService: ReqService
  ) {}
  displayTareaTabla: boolean = false;
  ngOnInit(): void {
    this.reqService.getRegistros().then((data) => (this.requerimiento = data));
  }
  showModal(typeModal: string, headerModal: string) {
    this.headerModal = headerModal;
    this.typeModal = typeModal;
    this.displayModal = true;
  }
}
