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
      start: "2022-11-08",
      end: "2022-11-13T19:00:00",
    },
    {
      title: "221/2017",
      start: "2022-11-04",
    },
    {
      title: "221/2017-2",
      start: "2022-11-04",
    },
    {
      title: "221/2017-3",
      start: "2022-11-04",
    },
    {
      title: "221/2018",
      start: "2022-11-10",
      end: "2022-11-12T19:00:00",
    },
    {
      title: "221/2018-2",
      start: "2022-11-09",
      end: "2022-11-12T19:00:00",
    },
    {
      title: "221/2019",
      start: "2022-11-14",
      end: "2022-11-23T19:00:00",
    },
    {
      title: "221/2020",
      start: "2022-11-14",
      end: "2022-11-23T19:00:00",
    },
    // {
    //   title: "221/2021",
    //   start: "2022-11-18",
    //   end: "2022-11-22T19:00:00",
    // }
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
