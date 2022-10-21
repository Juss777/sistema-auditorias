import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { CalendarModule } from "primeng/calendar";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { RadioButtonModule } from "primeng/radiobutton";
import { EditorModule } from "primeng/editor";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ProgressBarModule } from "primeng/progressbar";
import { DialogModule } from "primeng/dialog";
import { PaginatorModule } from "primeng/paginator";
import { SidebarModule } from "primeng/sidebar";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ChipModule } from "primeng/chip";
//FULL CALENDAR
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { CheckboxModule } from "primeng/checkbox";

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
]);

@NgModule({
  exports: [
    CardModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    DialogModule,
    PaginatorModule,
    ChipModule,

    EditorModule,
    InputTextareaModule,
    ProgressBarModule,
    FullCalendarModule,
    SidebarModule,
    AutoCompleteModule,
    CheckboxModule
  ],
})
export class PrimeNgModule {}
