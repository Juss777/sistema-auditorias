import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menu = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Buscador",
      url: "/buscador",
    },
    {
      id: 3,
      name: "Notificaciones",
      url: "/notificacion",
    },
    // {
    //   id: 4,
    //   name: "Nueva Auditoría",
    //   url: "/auditoria/:id/:isReading/:sectionId",
    // },
  ];
}
