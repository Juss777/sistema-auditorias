import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  ViewEncapsulation,
  AfterViewInit,
} from "@angular/core";

// import { gantt } from "dhtmlx-gantt";
import { gantt } from "dhtmlx-gantt";
import { GanttServiceService } from "../../services/gantt-service.service";
import { GanttData } from "../../class/auditoriasClass";

@Component({
  selector: "app-gantt",
  templateUrl: "./gantt.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class GanttComponent implements OnInit {
  @ViewChild("gantt", { static: true }) ganttContainer!: ElementRef;
  ganttData: GanttData[];
  @Input() columns: any[] = [
    { name: "text", label: " ", width: 70, resize: true, min_width: 70 },
  ];
  @Input() periodGantt: string = "Mes";
  @Input() year: number = 2023;

  constructor(private ganttService: GanttServiceService) {
    this.ganttData = ganttService.gantt.data;
  }
  ngOnInit(): void {
    this.loadGantt();
    setTimeout(() => {
      this.paintRow();
      this.paintRowTaskBar();
      this.paintTaskCellDashed();
    }, 700);
    setInterval(() => {
      this.paintRow();
      this.paintRowTaskBar();
      this.paintTaskCellDashed();
    }, 100);
  }

  loadGantt() {
    gantt.clearAll();
    gantt.config.date_format = "%d-%m-%Y";
    gantt.init(this.ganttContainer.nativeElement);

    gantt.config.columns = this.columns;
    gantt.config.start_on_monday = true;
    gantt.i18n.setLocale("es");
    gantt.config.min_column_width = 100;
    gantt.config.row_height = 20;
    gantt.config.scale_height = 60;
    gantt.config.grid_width = 150;
    gantt.config.layout = {
      css: "gantt_container",
      cols: [
        {
          width: 100,
        },
      ],
    };

    switch (this.periodGantt) {
      case "Semana":
        gantt.config.scales = [{ unit: "week", step: 1, format: "Semana %w" }];
        break;
      case "Mes":
        gantt.config.scales = [
          {
            unit: "month",
            step: 1,
            format:
              "<div class='gantt-scale-title'><div>%M</div><div class='gantt-grid-4'><div><span>Sem</span><span>1</span></div><div><span>Sem</span><span>2</span></div><div><span>Sem</span><span>3</span></div><div><span>Sem</span><span>4</span></div></div></div>",
          },
        ];
        break;
      case "Año":
        gantt.config.scales = [{ unit: "year", step: 1, format: "%Y" }];
        break;
    }

    gantt.templates.task_text = function (start, end, task) {
      return "";
    };

    gantt.templates.task_class = function (start: any, end: any, task: any) {
      let planned_end = new Date(task.planned_end);
      let final = new Date(end);
      if (task.text == "Plan") {
        return "gantt-plan";
      }

      return "gantt-task";
    };

    gantt.parse({ data: this.ganttData });
  }

  paintRow() {
    let divParent: HTMLCollection =
      document.getElementsByClassName("gantt_grid_data");
    let divChild = divParent[0].children;
    let contentChildTask = [];
    for (let i = 0; i < divChild.length; i++) {
      const child = divChild[i];
      if (child.classList[1] != "odd") {
        contentChildTask.push(child);
      }
    }
    contentChildTask.forEach((element, i) => {
      if (i % 2 == 1) {
        element.classList.add("gantt-row-gray");
      }
    });
  }

  paintRowTaskBar() {
    let divParent: HTMLCollection =
      document.getElementsByClassName("gantt_task_bg");
    let divChild = divParent[0].children;
    let lastPainted: boolean = true;
    for (let i = 0; i < divChild.length; i++) {
      if (i % 2 == 0) {
        if (lastPainted) {
          lastPainted = false;
        } else {
          divChild[i].classList.add("gantt-row-gray");
          divChild[i + 1].classList.add("gantt-row-gray");
          lastPainted = true;
        }
      }
    }
  }

  paintTaskCellDashed() {
    let divCellTask: HTMLCollection =
      document.getElementsByClassName("gantt_task_cell");
    for (let i = 0; i < divCellTask.length; i++) {
      divCellTask[i].innerHTML = `
        <div class="gantt-week-taskcell-dashed">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      `;
    }
  }
}
