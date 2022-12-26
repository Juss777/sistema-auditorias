import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tablero",
  templateUrl: "./tablero.component.html",
  styles: [],
})
export class TableroComponent implements OnInit {
  ejecutivo = false;
  display = false;
  content = false;
  inputDate = true;

  checkboxSelected: any[] = [];
  selectedValue!: string;
  constructor() {}

  ngOnInit(): void {}

  tiempoEspera = [
    {
      id: 1,
      value: "Esta semana",
      name: "Esta semana",
      type: "time",
    },
    {
      id: 2,
      value: "Este mes",
      name: "Este mes",
      type: "time",
    },
  ];

  filterMonto = [
    {
      id: 1,
      label: "$0-100 MDP",
      name: "$0-100 MDP",
    },
    {
      id: 2,
      label: "$100-5,000 MDP",
      name: "$100-5,000 MDP",
    },
    {
      id: 3,
      label: "$5000-100,000 MDP",
      name: "$5000-100,000 MDP",
    },
  ];

  filterRiesgos = [
    {
      id: 1,
      label: "Alto",
      name: "Alto",
    },
    {
      id: 2,
      label: "Medio",
      name: "Medio",
    },
    {
      id: 3,
      label: "Bajo",
      name: "Bajo",
    },
  ];

  filterEmpresas = [
    {
      id: 1,
      label: "BAZ",
      name: "BAZ",
    },
    {
      id: 2,
      label: "Elektra",
      name: "Elektra",
    },
    {
      id: 3,
      label: "Italika",
      name: "Italika",
    },
    {
      id: 4,
      label: "Total Play",
      name: "Total Play",
    },
  ];

  filterAdministrador = [
    {
      id: 1,
      label: "Aurelia Cleofa Rios",
      name: "Aurelia Cleofa Rios",
    },
    {
      id: 2,
      label: "Oscar Guevara Hernandez",
      year: "Oscar Guevara Hernandez",
    },
  ];

  filterRLegal = [
    {
      id: 1,
      label: "Rafael Flores Birrichaga",
      name: "Rafael Flores Birrichaga",
    },
  ];

  filterYear = [
    {
      id: 1,
      label: "2016",
      name: "2016",
    },
    {
      id: 2,
      label: "2017",
      name: "2017",
    },
  ];

  filterEtapas = [
    {
      id: 1,
      label: "Requerimiento de información",
      name: "Requerimiento de información",
    },
    {
      id: 2,
      label: "Oficio / Observaciones",
      name: "Oficio / Observaciones",
    },
  ];

  filterPartida = [
    {
      id: 1,
      label: "Generales",
      year: "Generales",
    },
    {
      id: 2,
      label: "Derivados",
      year: "Derivados",
    },
  ];

  filterRequerimiento = [
    {
      id: 1,
      label: "Documental / Probatorio",
      year: "Documental / Probatorio",
    },
    {
      id: 2,
      label: "Argumentativo / Descriptivo",
      year: "Argumentativo / Descriptivo",
    },
  ];

  filterRresponsable = [
    {
      id: 1,
      label: "Contraloría Banco Azteca",
      year: "Contraloría Banco Azteca",
    },
    {
      id: 2,
      label: "Cobranza Ejecutiva",
      year: "Cobranza Ejecutiva",
    },
  ];

  filterAutoridad = [
    {
      id: 1,
      label: "PRODECON",
      name: "PRODECON",
    },
    {
      id: 2,
      label: "SAT",
      name: "SAT",
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

  activarInputDate() {
    console.log("activarInputDate");
  }
}
