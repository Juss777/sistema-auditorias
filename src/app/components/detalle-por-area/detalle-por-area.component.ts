import { Component, OnInit } from "@angular/core";
import { Audito, Ofi, ReqColaborador } from "src/app/interface/custom";
import { CustomService } from "src/app/services/custom.service";
import { ReqService } from "src/app/services/req.service";

@Component({
  selector: "app-detalle-por-area",
  templateUrl: "./detalle-por-area.component.html",
  styles: [],
})
export class DetallePorAreaComponent implements OnInit {
  audi!: Audito[];
  ofi!: Ofi[];
  reqColaborador!: ReqColaborador[];
  constructor(
    public reqService: ReqService,
    public customService: CustomService
  ) {
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
    this.customService
      .getRequerimientoColaborador()
      .then((data) => (this.reqColaborador = data));
  }
}
