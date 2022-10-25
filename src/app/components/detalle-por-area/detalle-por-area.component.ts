import { Component, OnInit } from "@angular/core";
import { Audito, Ofi } from "src/app/interface/custom";
import { Req } from "src/app/interface/req";
import { ReqService } from "src/app/services/req.service";

@Component({
  selector: "app-detalle-por-area",
  templateUrl: "./detalle-por-area.component.html",
  styles: [],
})
export class DetallePorAreaComponent implements OnInit {
  audi!: Audito[];
  ofi!: Ofi[];
  requerimiento!: Req[];
  constructor(public reqService: ReqService) {
    this.audi = [
      { id: "1", name: "BAZ 2016" },
      { id: "2", name: "EKT 2016" },
    ];
    this.ofi = [
      { id: "1", name: "20/2016" },
      { id: "2", name: "20/2017" },
    ];
  }

  ngOnInit(): void {
    this.reqService.getRegistros().then((data) => (this.requerimiento = data));
  }
}
