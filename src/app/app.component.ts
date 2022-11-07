import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectname';

  constructor(
    private primengConfig: PrimeNGConfig, 
    private translateService: TranslateService
  ){}

  ngAfterViewInit() {
    this.translateChange("es");
  }

  translateChange(lang: string) {
    this.translateService.use(lang);
    this.translateService
      .get("primeng")
      .subscribe((res) => this.primengConfig.setTranslation(res));
  }

  traslateCalendarDashBoardInit(){
    var collection: any = document.getElementsByClassName('p-datepicker-calendar ');
    var table: any = collection[0];

    var btnMonth: any = document.getElementsByClassName('p-datepicker-month');
    
    switch (btnMonth[0].innerText) {
      case 'January':
        btnMonth[0].innerHTML = 'Enero';
        break;

      case 'February':
        btnMonth[0].innerHTML = 'Febrero';
        break;

      case 'March':
        btnMonth[0].innerHTML = 'Marzo';
        break;
      
      case 'April':
        btnMonth[0].innerHTML = 'Abril';
        break;
    
      case 'May':
        btnMonth[0].innerHTML = 'Mayo';
        break;

      case 'June':
        btnMonth[0].innerHTML = 'Junio';
        break;

      case 'July':
        btnMonth[0].innerHTML = 'Julio';
        break;

      case 'August':
        btnMonth[0].innerHTML = 'Agosto';
        break;
    
      case 'September':
        btnMonth[0].innerHTML = 'Septiembre';
        break;
  
      case 'October':
        btnMonth[0].innerHTML = 'Octubre';
        break;
  
      case 'November':
        btnMonth[0].innerHTML = 'Noviembre';
        break;

      case 'December':
        btnMonth[0].innerHTML = 'Diciembre';
        break;

      default:
        break;
    }

    for (let i = 0; i < table.children[0].children[0].children.length; i++) {
      const element = table.children[0].children[0].children[i];
      switch (element.children[0].innerHTML) {
        case 'Wk':
          element.children[0].innerHTML = 'Sem';
          break;

        case 'Su':
          element.children[0].innerHTML = 'Do';
          break;

        case 'Mo':
          element.children[0].innerHTML = 'Lu';
          break;
        
        case 'Tu':
          element.children[0].innerHTML = 'Ma';
          break;
      
        case 'We':
          element.children[0].innerHTML = 'Mi';
          break;

        case 'Th':
          element.children[0].innerHTML = 'Ju';
          break;

        case 'Fr':
          element.children[0].innerHTML = 'Vi';
          break;

        default:
          break;
      }
      
    }
  }
}

