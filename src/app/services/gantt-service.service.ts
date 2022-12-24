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
        text: "Requerimiento de información",
        start_date: "01-01-2023",
        duration: 30,
        progress: 1,
        parent: 0,
        open: true
      },
      {
        id: 4,
        text: "Plan",
        start_date: "01-01-2023",
        duration: 25,
        progress: 1,
        parent: 0,
        open: true
      },
      {
        id: 5,
        text: "Acta de comparecencias",
        start_date: "20-01-2023",
        duration: 25,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 6,
        text: "Plan",
        start_date: "20-01-2023",
        duration: 20,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 7,
        text: "Oficio de observaciones",
        start_date: "01-01-2023",
        duration: 30,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 8,
        text: "Plan",
        start_date: "01-01-2023",
        duration: 25,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 9,
        text: "Contestación de la autoridad",
        start_date: "04-01-2023",
        duration: 25,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 10,
        text: "Plan",
        start_date: "04-01-2023",
        duration: 20,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 11,
        text: "Corrección fiscal",
        start_date: "14-01-2023",
        duration: 25,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 12,
        text: "Plan",
        start_date: "14-01-2023",
        duration: 20,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 13,
        text: "Determinación de crédito",
        start_date: "02-02-2023",
        duration: 25,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 14,
        text: "Plan",
        start_date: "02-02-2023",
        duration: 20,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 15,
        text: "Fin de la auditoría",
        start_date: "01-03-2023",
        duration: 25,
        parent: 0,
        progress: 1,
        open: true
      },
      {
        id: 16,
        text: "Plan",
        start_date: "01-03-2023",
        duration: 20,
        parent: 0,
        progress: 1,
        open: true
      }
    ] as GanttData[],
    links: []
  };
}
