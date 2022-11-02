import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styles: [],
})
export class BuscadorComponent implements OnInit {
  constructor() {}

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
}
