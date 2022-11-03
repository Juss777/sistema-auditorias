import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styles: [],
})
export class BuscadorComponent implements OnInit {
  constructor() {}
  content = false;
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
          label: "2022",
        },
        {
          id: 2,
          label: "2023",
        },
        {
          id: 3,
          label: "2024",
        },
        {
          id: 4,
          label: "2025",
        },
        {
          id: 5,
          label: "2026",
        },
      ],
    },
    {
      id: 2,
      name: "Contribuyente",
      options: [
        {
          id: 1,
          label: "Contribuyente 1",
        },
        {
          id: 2,
          label: "Contribuyente 2",
        },
        {
          id: 3,
          label: "Contribuyente 3",
        },
        {
          id: 4,
          label: "Contribuyente 4",
        },
        {
          id: 5,
          label: "Contribuyente 5",
        },
      ],
    },
    {
      id: 3,
      name: "Autoridad",
      options: [
        {
          id: 1,
          label: "Autoridad 1",
        },
        {
          id: 2,
          label: "Autoridad 2",
        },
        {
          id: 3,
          label: "Autoridad 3",
        },
        {
          id: 4,
          label: "Autoridad 4",
        },
        {
          id: 5,
          label: "Autoridad 5",
        },
      ],
    },
    {
      id: 4,
      name: "Requerimiento",
      options: [
        {
          id: 1,
          label: "Requerimiento 1",
        },
        {
          id: 2,
          label: "Requerimiento 2",
        },
        {
          id: 3,
          label: "Requerimiento 3",
        },
        {
          id: 4,
          label: "Requerimiento 4",
        },
        {
          id: 5,
          label: "Requerimiento 5",
        },
      ],
    },
    {
      id: 5,
      name: "Observaciones",
      options: [
        {
          id: 1,
          label: "Observaciones 1",
        },
        {
          id: 2,
          label: "Observaciones 2",
        },
        {
          id: 3,
          label: "Observaciones 3",
        },
        {
          id: 4,
          label: "Observaciones 4",
        },
        {
          id: 5,
          label: "Observaciones 5",
        },
      ],
    },
    {
      id: 6,
      name: "Documentos presentados",
      options: [
        {
          id: 1,
          label: "Documentos presentados 1",
        },
        {
          id: 2,
          label: "Documentos presentados 2",
        },
        {
          id: 3,
          label: "Documentos presentados 3",
        },
        {
          id: 4,
          label: "Documentos presentados 4",
        },
        {
          id: 5,
          label: "Documentos presentados 5",
        },
      ],
    },
    {
      id: 7,
      name: "Etapas de proceso",
      options: [
        {
          id: 1,
          label: "Etapas de proceso 1",
        },
        {
          id: 2,
          label: "Etapas de proceso 2",
        },
        {
          id: 3,
          label: "Etapas de proceso 3",
        },
        {
          id: 4,
          label: "Etapas de proceso 4",
        },
        {
          id: 5,
          label: "Etapas de proceso 5",
        },
      ],
    },
    {
      id: 8,
      name: "Representante",
      options: [
        {
          id: 1,
          label: "Representante 1",
        },
        {
          id: 2,
          label: "Representante 2",
        },
        {
          id: 3,
          label: "Representante 3",
        },
        {
          id: 4,
          label: "Representante 4",
        },
        {
          id: 5,
          label: "Representante 5",
        },
      ],
    },
    {
      id: 9,
      name: "Área responsable",
      options: [
        {
          id: 1,
          label: "Área responsable 1",
        },
        {
          id: 2,
          label: "Área responsable 2",
        },
        {
          id: 3,
          label: "Área responsable 3",
        },
        {
          id: 4,
          label: "Área responsable 4",
        },
        {
          id: 5,
          label: "Área responsable 5",
        },
      ],
    },
    {
      id: 11,
      name: "Usuario",
      options: [
        {
          id: 1,
          label: "Usuario 1",
        },
        {
          id: 2,
          label: "Usuario 2",
        },
        {
          id: 3,
          label: "Usuario 3",
        },
        {
          id: 4,
          label: "Usuario 4",
        },
        {
          id: 5,
          label: "Usuario 5",
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
