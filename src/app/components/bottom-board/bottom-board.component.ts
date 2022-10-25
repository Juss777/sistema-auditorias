import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Task } from "src/app/interface/task";
import { AuditoriaService } from "src/app/services/auditorias.service";
import { Req } from "src/app/interface/req";
import { ReqService } from "src/app/services/req.service";
import { CustomService } from "src/app/services/custom.service";
import { Auditoria } from "src/app/class/auditoriasClass";

@Component({
  selector: "app-bottom-board",
  templateUrl: "./bottom-board.component.html",
  styles: [],
})
export class BottomBoardComponent implements OnInit, AfterViewInit{
  tasks!: Task[];
  startEndDay: Date[] = [new Date('2022-10-13'), new Date('2022-10-25')]
  value: number = 40;

  requerimiento!: Req[];

  @Input() auditoria = new Auditoria({});
  typeModal: string = "";
  displayTabla: boolean = false;
  headerModal: string = "";
  constructor(
    public customService: CustomService,
    public auditoriaService: AuditoriaService,
    public reqService: ReqService
  ) {}

  ngOnInit(): void {
    this.customService.getTasks().then((data) => (this.tasks = data));
    this.reqService.getRegistros().then((data) => (this.requerimiento = data));
  }

  ngAfterViewInit(): void{
    setTimeout(() =>{
      this.markDayStartAndFinish();
    }, 200)
    
  }

  pending = [
    {
      id: 1,
      name: "Subir comprobantes 2016",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 2,
      name: "Subir balanza de pagos",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 3,
      name: "Revisar trabajo",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 4,
      name: "Vaciar datos",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
    {
      id: 5,
      name: "Vaciar datos BAZ 2016",
      fechaEntrega: "15/10/2022",
      verTarea: "assets/img/iconos/icono-ver.png",
    },
  ];

  showModal(typeModal: string, headerModal: string) {
    this.headerModal = headerModal;
    this.typeModal = typeModal;
    this.displayTabla = true;
  }

  markDayStartAndFinish(){
    var d: any = document.getElementsByClassName('p-highlight');
    d[0].style.backgroundColor = 'green';
    d[0].style.color = 'white';
    d[d.length-1].style.backgroundColor = 'red';
    d[d.length-1].style.color = 'white';
  }
}
