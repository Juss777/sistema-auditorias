import { Component, Input, OnInit } from "@angular/core";
import { Auditoria } from "src/app/class/auditoriasClass";
import { AuditoriaService } from "src/app/services/auditorias.service";
import { CustomService } from "src/app/services/custom.service";

@Component({
  selector: "app-middle-board",
  templateUrl: "./middle-board.component.html",
  styles: [],
})
export class MiddleBoardComponent implements OnInit {
  date14!: Date;

  dates!: Date[];

  @Input() auditoria = new Auditoria({});

  constructor(
    public auditoriaService: AuditoriaService,
    public customService: CustomService
  ) {}

  ngOnInit(): void {}
}
