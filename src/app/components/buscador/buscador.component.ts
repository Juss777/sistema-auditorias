import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styles: [],
})
export class BuscadorComponent implements OnInit {
  constructor() {}
  content = false;
  checkboxSelected: any[] = [];
  selectedCountries!: any[];
  filteredCountries!: any[];
  ngOnInit(): void {}

  cardResult = [
    {
      id: 1,
      name: "Estado de cuenta - BAZ 2016",
      status: "Activo",
      body: "BAZ 2016 - Banco Azteca S.A. de C.V. - Etapa Crédito Fiscal - Contabilidad - Juan Pérez - Fecha de carga: 15/05/2016 Monto: $20,172 MDP",
    },
    {
      id: 2,
      name: "Estado de cuenta - BAZ 2016",
      status: "Terminado",
      body: "BAZ 2016 - Banco Azteca S.A. de C.V. - Etapa Crédito Fiscal - Contabilidad - Juan Pérez - Fecha de carga: 15/05/2016 Monto: $20,172 MDP",
    },
    {
      id: 3,
      name: "Estado de cuenta - BAZ 2016",
      status: "Activo",
      body: "BAZ 2016 - Banco Azteca S.A. de C.V. - Etapa Crédito Fiscal - Contabilidad - Juan Pérez - Fecha de carga: 15/05/2016 Monto: $20,172 MDP",
    },
    {
      id: 4,
      name: "Estado de cuenta - BAZ 2016",
      status: "Terminado",
      body: "BAZ 2016 - Banco Azteca S.A. de C.V. - Etapa Crédito Fiscal - Contabilidad - Juan Pérez - Fecha de carga: 15/05/2016 Monto: $20,172 MDP",
    },
  ];

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
      name: "Sociedad",
      options: [
        {
          id: 1,
          label: "Banco Azteca S.A. Institución de Banca Múltiple",
        },
      ],
    },
    {
      id: 3,
      name: "Representante Legal",
      options: [
        {
          id: 1,
          label: "Rafael Flores Birrichaga",
        },
      ],
    },
    {
      id: 4,
      name: "Autoridad",
      options: [
        {
          id: 1,
          label: "Servicio de Administración Tributaría",
        },
      ],
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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

  filterCountry() {}

  // selectedOption(event: any) {
  //   console.log(event);
  //   console.log(this.checkboxSelected);
  // }
}
