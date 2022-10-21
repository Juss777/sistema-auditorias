import { Component, OnInit, Input } from "@angular/core";
import { Oficio } from "src/app/class/auditoriasClass";

@Component({
  selector: "app-table-oficio",
  templateUrl: "./table-oficio.component.html",
  styleUrls: ["./table-oficio.component.scss"],
})
export class TableOficioComponent implements OnInit {
  @Input() listaOficios: Oficio[] = [];

  constructor() {}

  ngOnInit(): void {}
}
