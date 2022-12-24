import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

import { gantt } from 'dhtmlx-gantt';
import { GanttServiceService } from '../../services/gantt-service.service';
import { GanttData } from '../../class/auditoriasClass';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class GanttComponent implements OnInit {

  @ViewChild("gantt", {static: true}) ganttContainer!: ElementRef;
  ganttData: GanttData[];
  @Input() columns: any[] = [
    {name: "text", label: "", width: 200, resize: true, min_width: 170}
  ];
  @Input() periodGantt : string = "Semana";

  constructor( private ganttService: GanttServiceService) {
    this.ganttData = ganttService.gantt.data;
  }

  ngOnInit(): void {
    this.loadGantt();
  }

  loadGantt(){
    gantt.clearAll();
    gantt.config.date_format = "%d-%m-%Y";
    gantt.init(this.ganttContainer.nativeElement);

    gantt.config.columns = this.columns;
    gantt.config.start_on_monday = true;
    gantt.i18n.setLocale("es");
    gantt.config.min_column_width = 130;
    switch (this.periodGantt) {
      case "Semana":
        gantt.config.scales = [
          {unit: "week", step: 1, format: "Semana %w"},
        ];
        break;
      case "Mes":
        gantt.config.scales = [
          {unit: "month", step: 1, format: "%F,%Y"},
        ];
        break;
      case "Año":
        gantt.config.scales = [
          {unit: "year", step: 1, format: "%Y"},
        ];
        break;
    }

    gantt.templates.task_text=function(start,end,task){
      return ""; 
    }; 

    gantt.templates.task_class = function(start:any, end:any,task:any) {
      let planned_end = new Date(task.planned_end);
      let final = new Date(end);
      if(task.text=="Plan") {
        return "gantt-plan";
      }
      
      
      return "gantt-task";
    }

    gantt.parse({data: this.ganttData});
  }

}
