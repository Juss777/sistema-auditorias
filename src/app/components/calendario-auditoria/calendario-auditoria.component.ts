import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Oficio } from "../../class/auditoriasClass";
import { AuditoriaService } from "../../services/auditorias.service";

@Component({
  selector: "app-calendario-auditoria",
  templateUrl: "./calendario-auditoria.component.html",
  styleUrls: ["./calendario-auditoria.component.scss"],
})
export class CalendarioAuditoriaComponent implements OnInit {
  events = [
    {
      title: "Evento 1",
      start: "2022-09-25T12:00:00",
      end: "2022-09-30T18:00:00",
    },
    {
      title: "Citatorio Oficio 230/2020",
      start: "2022-09-02",
      end: "2022-09-23",
    },
  ];

  formOficio: FormGroup = this.formBuilder.group({
    oficio: [0],
  });

  oficioSelected!: Oficio;

  listOficios: Oficio[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private auditoriaService: AuditoriaService
  ) {
    this.listOficios = auditoriaService.oficios;
  }

  ngOnInit(): void {}
}
