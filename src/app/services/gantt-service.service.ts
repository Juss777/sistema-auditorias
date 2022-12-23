import { Injectable } from '@angular/core';
import { GanttData } from '../class/auditoriasClass';

@Injectable({
  providedIn: 'root'
})
export class GanttServiceService {

  constructor() { }

  gantt = {
    data: [
      {
        id: 1,
        text: "Brindar un servicio excepcional al cliente que nos coloque como el proveedor de telecomunicaciones más valorados en el mercado",
        progress: 1,
        open: true,
        start_date: "23-12-2022",
        duration: 60,
        parent: 0
      },
      {
        id: 2,
        text: "Plan",
        start_date: "23-12-2022",
        duration: 40,
        progress: 1,
        parent: 0,
        open: true
      },
      {
        id: 3,
        text: "Proyecto 1",
        start_date: "01-12-2022",
        duration: 40,
        progress: 1,
        parent: 0,
        open: true
      },
      {
        id: 4,
        text: "Plan",
        start_date: "01-12-2022",
        duration: 40,
        progress: 1,
        parent: 0,
        open: true
      },
      {
        id: 5,
        text: "Proyecto 3",
        start_date: "01-12-2022",
        duration: 60,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 6,
        text: "Plan",
        start_date: "01-12-2022",
        duration: 60,
        parent: 0,
        progress: 1,
        open: true
      }
    ] as GanttData[],
    links: []
  };
}
