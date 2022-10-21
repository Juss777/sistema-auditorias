import { Component, OnInit } from "@angular/core";
import { AuditoriaService } from "src/app/services/auditorias.service";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styles: [],
})
export class CardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  auditorias = [
    {
      id: 1,
      header: "Auditoría",
      content: "BAZ 2016",
      footer: "Última apertura: 12 sep 22",
      active: false,
      tipoCard: "informativo",
    },
    {
      id: 2,
      header: "Auditoría",
      content: "BAZ 2018",
      footer: "Última apertura: 12 sep 22",
      active: false,
      tipoCard: "mal",
    },
    {
      id: 3,
      header: "Auditoría",
      content: "BAZ 2019",
      footer: "Última apertura: 12 sep 22",
      active: false,
      tipoCard: "cambios",
    },
  ];
}
