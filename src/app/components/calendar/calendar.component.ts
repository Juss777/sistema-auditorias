import { Component, OnInit, Input } from "@angular/core";
import esLocale from "@fullcalendar/core/locales/es";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
})
export class CalendarComponent implements OnInit {
  @Input() events: any[] = [];
  options: any;

  constructor() {}

  ngOnInit(): void {
    this.options = {
      initialDate: this.getCurrentDate(),
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      editable: false,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      locale: esLocale,
      events: this.events,
    };
  }

  getCurrentDate() {
    var date = new Date();
    var day: any = date.getDate();
    day = day < 10 ? `0${day}` : day;
    var month: any = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    var year = date.getFullYear();

    var format: string = `${year}-${month}-${day}`;
    return format;
  }
}
