import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Gantt } from 'dhtmlx-gantt';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: []
})
export class GanttComponent implements OnInit {

  @ViewChild("gantt", {static: true}) ganttContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
