import { Component, OnInit } from "@angular/core";
import { Audito, Ofi } from "src/app/interface/custom";

@Component({
  selector: "app-detalle-por-area",
  templateUrl: "./detalle-por-area.component.html",
  styles: [],
})
export class DetallePorAreaComponent implements OnInit {
  audi!: Audito[];
  of!: Ofi[];
  constructor() {
    this.audi = [
      { id: "1", name: "BAZ 2016" },
      { id: "2", name: "EKT 2016" },
    ];
    this.audi = [
      { id: "1", name: "BAZ 2016" },
      { id: "2", name: "EKT 2016" },
    ];
  }

  ngOnInit(): void {}
}
