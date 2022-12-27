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
      name: "Buscador",
      url: "/buscador",
      icon: "ico-search-white"
    },
    {
      id: 2,
      name: "Notificaciones",
      url: "/notificacion",
      icon: "ico-bell-fill-white"
    }
  ];
}
