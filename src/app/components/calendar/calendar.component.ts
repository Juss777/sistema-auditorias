import { HostListener, Component, OnInit, Input } from "@angular/core";
import { buildEventRangeKey } from "@fullcalendar/angular";
import esLocale from "@fullcalendar/core/locales/es";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
})
export class CalendarComponent implements OnInit {
  @Input() events: any[] = [];
  options: any;

  constructor() {}

  @HostListener('click', ['$event'])
  onClick(event: any) {   
    if (event.target.nodeName === 'BUTTON' && event.target.classList[0] == 'fc-dayGridMonth-button') {
      this.events.forEach(x => {
        this.markDateStartAndEnd(x.start, x.end, x.title);
      });
    }
  }


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

    setTimeout(() => {
      this.events.forEach(x => {
        this.markDateStartAndEnd(x.start, x.end, x.title);
      });
    }, 200);

    
    
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

  markDateStartAndEnd(dateStart: string, dateEnd: string, title: string){
    var dateStartSplit = dateStart.split('T');
    var dateEndSplit = dateEnd.split('T');

    var dateStartOnly: any = dateStartSplit[0];

    var dateEndOnly: any = dateEndSplit[0]; 
    
    var eventTitle: any = document.getElementsByClassName('fc-event-title');

    for (let i = 0; i < eventTitle.length; i++) {
      const element = eventTitle[i];
      element.innerHTML = '';
    }

    var dayGridTop: any = document.getElementsByClassName('fc-daygrid-day-frame');

    for (let i = 0; i < dayGridTop.length; i++) {

      const eventStart = dayGridTop[i].children[1].children[0].classList;

      let date = dayGridTop[i].parentElement.dataset.date;
      
      if ( date == dateStartOnly && date != dateEndOnly) {        
        dayGridTop[i].children[1].children[0].children[0].children[0].children[0].innerHTML = `
        <div class="fc-event-title-container">
          <div class="fc-sticky">
            <div class="content-event">
              <div class="bg-start-event"></div> 
              Citatorio <br> ${title}
            </div>
          </div>
        </div>`;

      }

      if (date == dateEndOnly && date != dateStartOnly) {
        dayGridTop[i].children[1].innerHTML = `
          <div>
            <a>
              <div class="fc-event-main">
                <div class="fc-event-main-frame">
                  <div class="fc-event-title-container">
                    <div class="fc-sticky">
                      <div class="content-event">
                        <div class="bg-end-event"></div> 
                        Término <br> ${title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="fc-daygrid-day-bottom" style="margin-top: 46px;"></div>`;  
      }

      if (date == dateStartOnly && date == dateEndOnly) {
        dayGridTop[i].children[1].innerHTML = `
          <div>
            <a>
              <div class="fc-event-main">
                <div class="fc-event-main-frame">
                  <div class="fc-event-title-container">
                    <div class="fc-sticky">

                      <div class="content-event">
                        <div class="bg-start-event"></div> 
                        Citatorio <br> ${title}
                      </div>

                      <div class="content-event">
                        <div class="bg-end-event"></div> 
                        Término <br> ${title}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="fc-daygrid-day-bottom" style="margin-top: 46px;"></div>
        `;  
      }
    }

  }
}
