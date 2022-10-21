import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalle-auditoria",
  templateUrl: "./detalle-auditoria.component.html",
  styles: [],
})
export class DetalleAuditoriaComponent implements OnInit {
  idAuditoria: any;
  isEdit: boolean = false;

  constructor(private _router: ActivatedRoute) {}

  ngOnInit(): void {
    this.idAuditoria = this._router.snapshot.paramMap.get("id");
    if (this.idAuditoria > 0) {
      this.isEdit = true;
    }
  }

  currentStep = 1;
  numSteps = 4;

  nextStep() {
    this.currentStep++;
    if (this.currentStep > this.numSteps) {
      this.currentStep = 1;
    }
    var stepper = document.getElementById("stepper1");
    var steps = stepper!.getElementsByClassName("step");

    Array.from(steps).forEach((step, index) => {
      let stepNum = index + 1;
      if (stepNum === this.currentStep) {
        this.addClass(step, "editing");
      } else {
        this.removeClass(step, "editing");
      }
      if (stepNum < this.currentStep) {
        this.addClass(step, "done");
      } else {
        this.removeClass(step, "done");
      }
    });
  }
  hasClass(elem: any, className: any) {
    return new RegExp(" " + className + " ").test(" " + elem.className + " ");
  }

  addClass(elem: any, className: any) {
    if (!this.hasClass(elem, className)) {
      elem.className += " " + className;
    }
  }

  removeClass(elem: any, className: any) {
    var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
    if (this.hasClass(elem, className)) {
      while (newClass.indexOf(" " + className + " ") >= 0) {
        newClass = newClass.replace(" " + className + " ", " ");
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, "");
    }
  }

  list = [
    {
      id: 1,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 2,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 3,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 4,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 5,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 6,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 7,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 8,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 9,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 10,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 11,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 12,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
  ];

  pagingList: any[] = [
    {
      id: 1,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 2,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 3,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 4,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 5,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 6,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 7,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 8,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
    {
      id: 9,
      nombre:
        "Operaciones financieras derivadas: Aunque se tomó una interpretación fiscal más favorable para BAZ, abusivamente el SAT rechaza todo el gasto por no entender la operación, el efecto real en una interpretación conservadora es de $30 MDP; sin embargo, la Contingencia conforme al criterio del SAT es de $520 MDP.",
    },
  ];


  paginate(event: any) {
    this.pagingList = [];

    for (let i = event.first; i < event.rows * (event.page + 1); i++) {
      const element = this.list[i];
      if (element) {
        this.pagingList.push(element);
      }
    }
  }

}
