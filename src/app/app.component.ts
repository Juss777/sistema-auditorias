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
    const mapMonth: any = {
      "January": "Enero",
      "February": "Febrero",
      "March": "Marzo",
      "April": "Abril",
      "May": "Mayo",
      "June": "Junio",
      "July": "Julio",
      "August": "Agosto",
      "September": "Septiembre",
      "October": "Octubre",
      "November": "Noviembre",
      "December": "Diciembre",
    }

    btnMonth[0].innerHTML = mapMonth[btnMonth[0].innerText];

    for (let i = 0; i < table.children[0].children[0].children.length; i++) {
      const element = table.children[0].children[0].children[i];

      const mapDay: any = {
        "Wk": "Sem",
        "Su": "Do",
        "Mo": "Lu",
        "Tu": "Ma",
        "We": "Mi",
        "Th": "Ju",
        "Fr": "Vi",
        "Sa": "Sa"
      };

      element.children[0].innerHTML = mapDay[element.children[0].innerHTML]      
    }
  }
}

