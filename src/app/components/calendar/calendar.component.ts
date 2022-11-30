import { HostListener, Component, OnInit, Input } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular";
import esLocale from "@fullcalendar/core/locales/es";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
})
export class CalendarComponent implements OnInit {
  @Input() events: any[] = [];
  options: any;

  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   dateClick: this.handleDateClick.bind(this),
  //   events: [
  //     {
  //       title: "221/2017",
  //       date: "2022-11-03",
  //     },
  //     {
  //       title: "221/2018",
  //       date: "2022-11-04",
  //     }
  //   ],
  //   locale: 'es'
  // }

  constructor() {}

  @HostListener('click', ['$event'])
  onClick(event: any) {   
    if (
      (event.target.nodeName === 'BUTTON' && 
      event.target.classList[0] == 'fc-next-button' || 
      event.target.classList[0] == 'fc-prev-button') || 
      (event.target.nodeName === 'SPAN' && 
      event.target.classList[1] == 'fc-icon-chevron-right' || 
      event.target.classList[1] == 'fc-icon-chevron-left')) {
      this.events.forEach(x => {
        this.markDateStartAndEnd(x.start, x.end, x.title);
      });
    }

    if (event.target.nodeName === 'A' && event.target.classList[1] === 'fc-more-link') {
      let pop = document.getElementsByClassName('fc-popover');
      console.log("Pop: ", pop);
      
      
    }
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }


  ngOnInit(): void {
    this.options = {
      initialDate: this.getCurrentDate(),
      headerToolbar: {
        left: "prev,next",
        center: "title",
        right: "",
        //right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      editable: false,
      selectable: false,
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

  _months: any[] = [
    { name: 'enero', number: 1},
    { name: 'febrero', number: 2},
    { name: 'marzo', number: 3},
    { name: 'abril', number: 4},
    { name: 'mayo', number: 5},
    { name: 'junio', number: 6},
    { name: 'julio', number: 7},
    { name: 'agosto', number: 8},
    { name: 'septiembre', number: 9},
    { name: 'octubre', number: 10},
    { name: 'noviembre', number: 11},
    { name: 'diciembre', number: 12},
  ];
  listMarginTopDateStart: any[] = [];

  changePlusMore(){
    var moreLink = document.getElementsByClassName("fc-more-link");
    
    for (let i = 0; i < moreLink.length; i++) {
      const element: any = moreLink[i];
      //console.log(element.innerText);
      let text = element.innerText.split(" ");
      element.innerText = `${text[0]} Tareas`
      
    }
  }

  markDateStartAndEnd(dateStart: string, dateEnd: string, title: string){
    //this.changePlusMore();

    var dateStartSplit = dateStart.split('-');
    var dateStartOnly: number = parseInt(dateStartSplit[2]);

    var dateEndOnly: number = 0, 
        monthDateEnd: number = 0;

    if (dateEnd !== undefined) {
      var dateEndSplit: any = dateEnd.split('T');
      dateEndSplit = dateEndSplit[0].split('-');
      dateEndOnly = parseInt(dateEndSplit[2]); 
      monthDateEnd = parseInt(dateEndSplit[1]);
    }
  
    var eventTitle: any = document.getElementsByClassName('fc-event-title');
    //console.log("eventTitle: ", eventTitle);
    

    // for (let i = 0; i < eventTitle.length; i++) {
    //   const element = eventTitle[i];
    //   element.innerHTML = '';
    // }
    var dayGridTop: any = document.getElementsByClassName('fc-daygrid-day-frame');
    //console.log("dayGridTop: ", dayGridTop);
    for (let i = 0; i < dayGridTop.length; i++) {

      const item = dayGridTop[i];
      let day: number = parseInt(item.children[0].textContent);

      var month: any = item.childNodes[0].lastChild.ariaLabel.split(" ");
      //console.log(`DATE: ${month[0]} ${month[2]}`);
      var numberMonth: number = this._months.find(x => x.name === month[2]).number;

      

      if (day === dateStartOnly && dateEnd !== undefined) {
        for (let j = 0; j < item.children[1].children.length; j++) {
          const element = item.children[1].children[j];
          //console.log("element: ", element);
          if (element.classList[0] == 'fc-daygrid-event-harness') {
            var innerText = element.children[0].children[0].children[0].children[1].children[0].innerText;

            if (innerText === title) {
              //console.log(`Citatorio ${title}, día: ${day}`);
              element.children[0].children[0].children[0].children[1].children[0].innerHTML = `
                <div class="content-event">
                  <div class="bg-start-event"></div> 
                  Citatorio <br> ${title}
                </div>
              `;
              this.listMarginTopDateStart.push({title, top: element.style.top})
            }           
          }
        }       
      }


      if (dateEnd !== undefined) {
        if (day === dateEndOnly && numberMonth === monthDateEnd) {

          //const elementEnd = item.children[1].children[0];
          

          //elementEnd.style.marginTop = this.listMarginTopDateStart.find(x => x.title === title).top;
          const elementEnd = item.children[1];
          var divDayBottom: any = elementEnd.innerHTML;
          
          if (this.listMarginTopDateStart.find(x => x.title === title)) {
            elementEnd.innerHTML = "";

            elementEnd.innerHTML += `
              <div class="content-event end" style="margin-top: ${this.listMarginTopDateStart.find(x => x.title === title).top}">
                <div class="bg-end-event"></div> 
                Término <br> ${title}
              </div>
            `;

            elementEnd.innerHTML += divDayBottom;
          }
          

          // if (item.childNodes[1].children[0].children.length === 0) {
            
          //   elementEnd.innerHTML += `
          //     <div class="content-event end">
          //       <div class="bg-end-event"></div> 
          //       Término <br> ${title}
          //     </div>
          //   `;

          // } else {

          //   elementEnd.innerHTML = `
          //     <div class="content-event end">
          //       <div class="bg-end-event"></div> 
          //       Término <br> ${title}
          //     </div>
          //   `;

          // }

          
          // for (let j = 0; j < item.children[1].children.length; j++) {
          //   const elementEnd = item.children[1].children[j];
          //   //console.log("elementEnd: ", elementEnd);
          //   elementEnd.style.marginTop = this.listMarginTopDateStart.find(x => x.title === title).top;
          //   if (item.childNodes[1].children[0].children.length === 0) {
              
          //     elementEnd.innerHTML += `
          //       <div class="content-event end">
          //         <div class="bg-end-event"></div> 
          //         Término <br> ${title}
          //       </div>
          //     `;
          //   } else {
          //     elementEnd.innerHTML = `
          //       <div class="content-event end">
          //         <div class="bg-end-event"></div> 
          //         Término <br> ${title}
          //       </div>
          //     `;
          //   }
          // }
        }
      }

      
      //console.log(item.children[0].textContent);
      
      // const eventStart = dayGridTop[i].children[1].children[0].classList;

      // let date = dayGridTop[i].parentElement.dataset.date;
      
      // if ( date == dateStartOnly && date != dateEndOnly) {        
      //   dayGridTop[i].children[1].children[0].children[0].children[0].children[0].innerHTML = `
      //   <div class="fc-event-title-container">
      //     <div class="fc-sticky">
      //       <div class="content-event">
      //         <div class="bg-start-event"></div> 
      //         Citatorio <br> ${title}
      //       </div>
      //     </div>
      //   </div>`;

      // }

      // if (date == dateEndOnly && date != dateStartOnly) {
      //   dayGridTop[i].children[1].innerHTML = `
      //     <div>
      //       <a>
      //         <div class="fc-event-main">
      //           <div class="fc-event-main-frame">
      //             <div class="fc-event-title-container">
      //               <div class="fc-sticky">
      //                 <div class="content-event">
      //                   <div class="bg-end-event"></div> 
      //                   Término <br> ${title}
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </a>
      //     </div>
      //     <div class="fc-daygrid-day-bottom" style="margin-top: 46px;"></div>`;  
      // }

      // if (date == dateStartOnly && date == dateEndOnly) {
      //   dayGridTop[i].children[1].innerHTML = `
      //     <div>
      //       <a>
      //         <div class="fc-event-main">
      //           <div class="fc-event-main-frame">
      //             <div class="fc-event-title-container">
      //               <div class="fc-sticky">

      //                 <div class="content-event">
      //                   <div class="bg-start-event"></div> 
      //                   Citatorio <br> ${title}
      //                 </div>

      //                 <div class="content-event">
      //                   <div class="bg-end-event"></div> 
      //                   Término <br> ${title}
      //                 </div>

      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </a>
      //     </div>
      //     <div class="fc-daygrid-day-bottom" style="margin-top: 46px;"></div>
      //   `;  
      // }
    }
    console.log("listMarginTopDateStart: ", this.listMarginTopDateStart);
  }
}
