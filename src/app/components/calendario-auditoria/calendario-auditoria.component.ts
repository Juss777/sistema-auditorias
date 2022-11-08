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
      title: "230/2016",
      start: "2022-11-02T09:00:00",
      end: "2022-11-16T19:00:00",
    },
    {
      title: "221/2016",
      start: "2022-11-21T12:00:00",
      end: "2022-11-25T18:00:00",
    }
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
