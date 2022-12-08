import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";
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
  typeModal: string = "";
  displayTabla: boolean = false;
  headerModal: string = "";

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
        this.markDateStart(x.start, x.end, x.title);
        this.changePlusMore();
        this.markDateEnd(x.end, x.title);
      });

      this.cleanLabelDefault();
    }

    if (event.target.nodeName === 'A' && event.target.classList[0] === 'action-detail') {
      const element = event.path[3].children[0].children[0];
      let day: number = parseInt(element.textContent);
      let dateSection: any = element.ariaLabel.split(" ");
      let numberMonth: number = this._months.find(x => x.name === dateSection[2]).number;
      let year = dateSection[dateSection.length - 1];
      let date = `${year}-${numberMonth}-${day > 9 ? day : '0' + day}`;
      this.openModalDetails(date);
    }
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
        this.markDateStart(x.start, x.end, x.title);
        this.changePlusMore();
        this.markDateEnd(x.end, x.title);
      });

      this.cleanLabelDefault();
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
    { name: 'enero', number: '01'},
    { name: 'febrero', number: '02'},
    { name: 'marzo', number: '03'},
    { name: 'abril', number: '04'},
    { name: 'mayo', number: '05'},
    { name: 'junio', number: '06'},
    { name: 'julio', number: '07'},
    { name: 'agosto', number: '08'},
    { name: 'septiembre', number: '09'},
    { name: 'octubre', number: '10'},
    { name: 'noviembre', number: '11'},
    { name: 'diciembre', number: '12'},
  ];
  listMarginTopDateStart: any[] = [];

  changePlusMore(){
    var moreLink = document.getElementsByClassName("fc-more-link");
    
    for (let i = 0; i < moreLink.length; i++) {
      const element: any = moreLink[i];
      let text = element.innerText.split(" ");
      element.parentElement.innerHTML = `<a class="action-detail">${text[0]} Tareas</a>`      
    }
  }

  cleanLabelDefault(){
    var eventTitle: any = document.getElementsByClassName('fc-event-title');
    for (let i = 0; i < eventTitle.length; i++) {
      const element = eventTitle[i];
      if (element.children.length == 0) {
        element.innerHTML = '';
      }
    }
  }

  markDateStart(dateStart: string, dateEnd: string, title: string){

    var dateStartSplit = dateStart.split('-');
    var dateStartOnly: number = parseInt(dateStartSplit[2]);

    // var dateEndOnly: number = 0, 
    //     monthDateEnd: number = 0;

    // if (dateEnd !== undefined) {
    //   var dateEndSplit: any = dateEnd.split('T');
    //   dateEndSplit = dateEndSplit[0].split('-');
    //   dateEndOnly = parseInt(dateEndSplit[2]); 
    //   monthDateEnd = parseInt(dateEndSplit[1]);
    // }
  
    

    var dayGridTop: any = document.getElementsByClassName('fc-daygrid-day-frame');
    //console.log("dayGridTop: ", dayGridTop);
    for (let i = 0; i < dayGridTop.length; i++) {

      const item = dayGridTop[i];
      let day: number = parseInt(item.children[0].textContent);

      //var month: any = item.childNodes[0].lastChild.ariaLabel.split(" ");
      //console.log(`DATE: ${month[0]} ${month[2]}`);
      //var numberMonth: number = this._months.find(x => x.name === month[2]).number;

      

      if (day === dateStartOnly && dateEnd !== undefined) {
        for (let j = 0; j < item.children[1].children.length; j++) {
          const element = item.children[1].children[j];
          //console.log("element: ", element);
          if (element.classList[0] == 'fc-daygrid-event-harness') {
            if (element.children[0].children[0].children[0].children[1]) {
              var innerText = element.children[0].children[0].children[0].children[1].children[0].innerText; 

              if (innerText === title) {
                //console.log(`Citatorio ${title}, día: ${day}`);
                element.children[0].children[0].children[0].children[1].children[0].innerHTML = `
                  <div class="content-event">
                    <div class="bg-start-event"></div> 
                    Citatorio <br> ${title}
                  </div>
                `;
                this.listMarginTopDateStart.push({title, top: element.style.top == '' ? element.style.marginTop : element.style.top});
                return false;
              }
            }
          }
        }       
      }


      // if (dateEnd !== undefined) {
      //   if (day === dateEndOnly && numberMonth === monthDateEnd) {

      //     //const elementEnd = item.children[1].children[0];
      //     //elementEnd.style.marginTop = this.listMarginTopDateStart.find(x => x.title === title).top;

      //     const elementEnd = item.children[1];
      //     var divDayBottom: any = elementEnd.innerHTML;
          
      //     if (this.listMarginTopDateStart.find(x => x.title === title)) {
      //       elementEnd.innerHTML = "";

      //       elementEnd.innerHTML += `
      //         <div class="content-event end" style="margin-top: ${this.listMarginTopDateStart.find(x => x.title === title).top}">
      //           <div class="bg-end-event"></div> 
      //           Término <br> ${title}
      //         </div>
      //       `;

      //       elementEnd.innerHTML += divDayBottom;
      //     }
      //   }
      // }
    }

    return true;
  }

  markDateEnd(dateEnd: string, title: string){

    var dateEndOnly: number = 0, 
        monthDateEnd: number = 0;

    if (dateEnd !== undefined) {
      var dateEndSplit: any = dateEnd.split('T');
      dateEndSplit = dateEndSplit[0].split('-');
      dateEndOnly = parseInt(dateEndSplit[2]); 
      monthDateEnd = dateEndSplit[1];
    }

    var dayGridTop: any = document.getElementsByClassName('fc-daygrid-day-frame');

    for (let i = 0; i < dayGridTop.length; i++) {

      const item = dayGridTop[i];
      let day: number = parseInt(item.children[0].textContent);
      var month: any = item.childNodes[0].lastChild.ariaLabel.split(" ");
      var numberMonth: number = this._months.find(x => x.name === month[2]).number;

      if (dateEnd !== undefined) {
        if (day === dateEndOnly && numberMonth == monthDateEnd) {

          const elementEnd = item.children[1];
          var divDayBottom: any = elementEnd.innerHTML;
          //console.log("divDayBottom: ", divDayBottom);
          
          if (this.listMarginTopDateStart.find(x => x.title === title)) {
            elementEnd.innerHTML = "";

            elementEnd.innerHTML += `
              <div class="content-event end" style="margin-top: ${this.listMarginTopDateStart.find(x => x.title === title).top}; position: absolute;margin-left: 79px;">
                <div class="bg-end-event"></div> 
                Término <br> ${title}
              </div>
            `;

            elementEnd.innerHTML += divDayBottom;
          }
          
        }
      }
    }    
  }

  openModalDetails(date:string){
    console.log("Date selected: ", date);
    this.headerModal = `Tareas / BAZ 2016 - Oficio 220/2016 - Requerimiento de información`;
    this.typeModal = 'modal1';
    this.displayTabla = true;
  }

}


