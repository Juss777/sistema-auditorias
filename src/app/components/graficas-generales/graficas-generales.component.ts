import { Component, OnInit } from '@angular/core';
import { GanttServiceService } from '../../services/gantt-service.service';
import { GanttData } from '../../class/auditoriasClass';

@Component({
  selector: 'app-graficas-generales',
  templateUrl: './graficas-generales.component.html',
  styleUrls: []
})
export class GraficasGeneralesComponent implements OnInit {
  ganttData: GanttData[] = [];

  constructor(private ganttService: GanttServiceService) { 
    this.ganttData = ganttService.gantt.data;
  }

  ngOnInit(): void {
  }

}
