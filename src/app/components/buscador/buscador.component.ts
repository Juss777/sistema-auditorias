import { Component, OnInit } from "@angular/core";
import { Auditoria } from "src/app/class/auditoriasClass";
import { AuditoriaService } from "src/app/services/auditorias.service";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styles: [],
})
export class BuscadorComponent implements OnInit {
  content = false;
  checkboxSelected: any[] = [];

  cardResult: Auditoria[] = [];
  constructor(private auditoriaService: AuditoriaService) {
    this.cardResult = this.auditoriaService.auditoriaDetalles;
  }
  ngOnInit(): void {}

  filterMenu = [
    {
      id: 1,
      name: "Año",
      options: [
        {
          id: 1,
          label: "2016",
        },
      ],
    },
    {
      id: 2,
      name: "Autoridad",
      options: [
        {
          id: 1,
          label: "Servicio de Administración Tributaría",
        },
      ],
    },
    {
      id: 3,
      name: "Etapas de proceso",
      options: [
        {
          id: 1,
          label: "Requerimiento de información",
        },
        {
          id: 2,
          label: "Oficio/Observaciones",
        },
      ],
    },
    {
      id: 4,
      name: "Partida",
      options: [
        {
          id: 1,
          label: "Generales",
        },
        {
          id: 2,
          label: "Derivados",
        },
      ],
    },
    {
      id: 5,
      name: "Tipo de requerimiento",
      options: [
        {
          id: 1,
          label: "Documental/Probatorio",
        },
        {
          id: 2,
          label: "Argumentativo/Descriptivo",
        },
      ],
    },
    {
      id: 6,
      name: "Área Responsable",
      options: [
        {
          id: 1,
          label: "Contralorí Banco Azteca",
        },
        {
          id: 2,
          label: "Cobranza Ejecutiva",
        },
      ],
    },
  ];

  idMenuFilter: number = 0;
  showContent(idMenu: number) {
    if (this.idMenuFilter == idMenu) {
      this.content = !this.content ? true : false;
    } else {
      this.content = true;
    }

    this.idMenuFilter = idMenu;
  }
}
