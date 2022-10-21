import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
interface Authority {
  name: string;
}
interface Requerimiento {
  name: string;
}
interface Area {
  name: string;
}
interface Responsable {
  name: string;
}
@Component({
  selector: "app-nuevo-oficio",
  templateUrl: "./nuevo-oficio.component.html",
  styles: [],
})
export class NuevoOficioComponent implements OnInit {
  varEditor = false;
  formBuzon = false;
  formFisico = true;
  fechaTermino = true;

  newReq: boolean = false;
  newArea: boolean = false;
  displayReq: boolean = false;
  displayArea: boolean = false;

  displayNuevoReq: boolean = false;

  authorities!: Authority[];
  selectedAuthority!: Authority;

  requerimientos!: Requerimiento[];
  selectedReq!: Requerimiento;

  areas!: Area[];
  selectedArea!: Area;

  responsables!: Responsable[];
  selectedResponsable!: Responsable;

  tipoComunicado: string = "citatorio";
  tipoMensaje: string = "citatorio";
  tipoDocumento: string = "Citatorio";

  formNotificacion: FormGroup = this.fb.group({
    tipoNotificacion: [""],
    existeMensaje: [""],
    fechaMensaje: [""],
    fechaNotifacion: [""],
    tipoArchivo: [""],
    notificacionTipo: [""],
    fechaTermino: [""],
    cumpleLey: [""],
  });

  files = [
    {
      id: "file 1",
      label: "Citatorio",
      name: "Agregar documento",
      estatus: false,
    },
    {
      id: "file 2",
      label: "Notificación",
      name: "Agregar documento",
      estatus: false,
    },
  ];

  selectedFile: any;
  loadedFileG: any;
  handleFileInput(loadedFile: any, file: any) {
    this.loadedFileG = loadedFile;
    this.selectedFile = file;
    this.selectedFile.file = this.loadedFileG.target.files[0];
    this.selectedFile.estatus = true;
    this.selectedFile.name = this.loadedFileG.target.files[0].name;
    console.log(this.selectedFile);
  }

  constructor(private fb: FormBuilder) {
    this.authorities = [
      { name: "Opción 1" },
      { name: "Opción 2" },
      { name: "Opción 3" },
    ];
    this.requerimientos = [
      { name: "Opción 1" },
      { name: "Opción 2" },
      { name: "Opción 3" },
    ];
    this.areas = [
      { name: "Opción 1" },
      { name: "Opción 2" },
      { name: "Opción 3" },
    ];
    this.responsables = [
      { name: "Opción 1" },
      { name: "Opción 2" },
      { name: "Opción 3" },
    ];
  }

  ngOnInit(): void {}

  requirements = [
    {
      id: "001",
      type: "Estado de Cuenta",
      area: "Contabilidad",
      responsible: "Juan López",
      email: "ejemplocorreo@algo.com.mx",
      state: "Pendiente",
    },
    {
      id: "002",
      type: "Componentes de Gastos",
      area: "Fiscal",
      responsible: "Susana Ruiz",
      email: "ejemplocorreo@algo.com.mx",
      state: "Pendiente",
    },
  ];

  changeNotiFisica() {
    this.tipoComunicado = "citatorio";
    this.tipoMensaje = "citatorio";
    this.tipoDocumento = "Citatorio";

    this.formBuzon = false;
    this.formFisico = true;
  }

  changeNotiBuzon() {
    this.tipoComunicado = "aviso";
    this.tipoMensaje = "aviso";
    this.tipoDocumento = "Aviso";

    this.formBuzon = true;
    this.formFisico = false;

    this.varEditor = false;
  }

  changeCitaSi() {
    this.varEditor = true;
  }

  changeCitaNo() {
    this.varEditor = false;
  }

  showModal() {
    this.displayNuevoReq = true;
  }

  // -----Funcionalidad modal - Nuevo Requerimiento-----
  nuevoReq() {
    this.newReq = true;
  }
  nuevaArea() {
    this.newArea = true;
  }
  agregarReq() {
    this.displayReq = true;
    this.displayArea = false;
  }
  agregarArea() {
    this.displayArea = true;
    this.displayReq = false;
  }
  agregarNuevoReq() {
    this.displayArea = false;
    this.displayReq = false;
  }
  mandarCorreo() {
    window.location.href =
      "https://10.89.85.139:8643/auditoriags/envio/correoAuditoria";
    this.displayNuevoReq = false;
  }
}
