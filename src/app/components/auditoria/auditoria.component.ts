import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import {
  Area,
  Auditoria,
  UnidadNegocio,
  Representante,
  Oficio,
  Etapa,
  Requirement,
  TypeRequeriment,
  Responsible,
} from "../../class/auditoriasClass";
import { AuditoriaService } from "../../services/auditorias.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-auditoria",
  templateUrl: "./auditoria.component.html",
  styleUrls: ["./auditoria.component.scss"],
})
export class AuditoriaComponent implements OnInit {
  idAuditoria: any;
  isReading: any;

  listAuditorias: Auditoria[] = [];
  auditoria = new Auditoria({});
  buttonDisabled: boolean = false;

  unidadeNegocio: UnidadNegocio[] = [
    { id: 1, nombre: "Banco Azteca", rfc: "", siglas: "BAZ" },
    { id: 2, nombre: "Elektra", rfc: "", siglas: "EKT" },
    { id: 3, nombre: "Total Play", rfc: "", siglas: "TP" },
  ];

  representantes: Representante[] = [
    { id: 1, nombre: "Representante 1", apellidoPat: "", apellidoMat: "" },
    { id: 2, nombre: "Representante 2", apellidoPat: "", apellidoMat: "" },
    { id: 3, nombre: "Representante 3", apellidoPat: "", apellidoMat: "" },
  ];

  areas: Area[] = [
    {
      id: 1,
      responsableArea: "Representante 1",
      grupoCorreo: "A",
      areaResponsable: "Area 1",
    },
    {
      id: 2,
      responsableArea: "Representante 2",
      grupoCorreo: "B",
      areaResponsable: "Area 2",
    },
    {
      id: 3,
      responsableArea: "Representante 3",
      grupoCorreo: "C",
      areaResponsable: "Area 3",
    },
  ];

  results!: string[];

  dButton = false;

  message: string = "";
  icon: string = "";
  typeConfirma: string = "";

  constructor(
    public formBuilder: FormBuilder,
    private _router: ActivatedRoute,
    public auditoriaService: AuditoriaService,
    private toastr: ToastrService
  ) {
    this.idAuditoria = this._router.snapshot.paramMap.get("id");
    this.isReading =
      this._router.snapshot.paramMap.get("isReading") == "true" ? true : false;

    if (this.idAuditoria > 0) {
      this.getAuditoriaData(this.idAuditoria);
    }
  }

  ngOnInit(): void {

  }

  getformAuditoriaData(auditoria: Auditoria) {
    this.auditoria = auditoria;
    this.saveDataAuditoria();
  }

  saveDataAuditoria() {
    var msj = "Se creó nueva auditoría exitosamente";
    var accion = "Alta correcta";

    if (this.idAuditoria > 0) {
      msj = "Se modificó la auditoría exitosamente";
      accion = "Modificacion correcta";
    }

    if (this.idAuditoria > 0) {
      let index = this.auditoriaService.auditoriaDetalles.findIndex(
        (x) => x.id === this.idAuditoria
      );
      this.auditoriaService.auditoriaDetalles[index] = this.auditoria;
    } else {
      this.auditoria.id = this.auditoriaService.auditoriaDetalles.length + 1;
      this.auditoriaService.auditoriaDetalles.push(this.auditoria);
    }

    this.toastr.success(msj, accion, {
      timeOut: 6000,
      extendedTimeOut: 6000,
      closeButton: true,
    });

    this.displayConfirma = false;
  }

  getFormEtapaData(etapa: Etapa) {
    console.log(etapa);
  }

  getAuditoriaData(idAuditoria: any) {
    var auditoria = this.auditoriaService.auditoriaDetalles.find(
      (auditoria) => auditoria.id == idAuditoria
    );
    if (auditoria) {
      this.auditoria = auditoria;
    }
  }

  // -----Funcionalidad modal - Nuevo Requerimiento-----
  displayNuevoReq: boolean = false;

  visibleSidebar: boolean = false;
  catalogName: string = "";
  catalog: string = "";

  requirements: Requirement[] = [
    {
      id: 1,
      description: 'Explique amplia y detalladamente en qué consisten las erogaciones por concepto de “Artículos Promocionales”; asimismo, en caso de que dichos artículos sean entregados a los clientes (acreditados) de la contribuyente, indique los requisitos que debe.',
      typePartida: 'Generales',
      typeDocument: 'Instrumento público, solicitud de crédito, aprobación de crédito, contrato, identificación, tabla de amortización, comprobante de domicilio, estado de cuenta, detalle de movimientos, consulta de gestiones, registros contables' ,
      typeRequestDocument: '',
      typeRequestDescrip: '',
      typeRequestNuevo: '',
      areaResponsible: 'Contabilidad' ,
      responsible: '',
      dateDelivery: '',
      acredita: '',
      state: "Pendiente",
    },
    {
      id: 2,
      description: 'Explique amplia y detalladamente en qué consisten las erogaciones por concepto de “Artículos Promocionales”; asimismo, en caso de que dichos artículos sean entregados a los clientes (acreditados) de la contribuyente, indique los requisitos que debe.',
      typePartida: 'Generales',
      typeDocument: 'Instrumento público, solicitud de crédito, aprobación de crédito, contrato, identificación, tabla de amortización, comprobante de domicilio, estado de cuenta, detalle de movimientos, consulta de gestiones, registros contables' ,
      typeRequestDocument: '',
      typeRequestDescrip: '',
      typeRequestNuevo: '',
      areaResponsible: 'Contabilidad' ,
      responsible: '',
      dateDelivery: '',
      acredita: '',
      state: "Pendiente",
    }
  ];

  requirementsEmpty: Requirement[] = [];

  tipoRequerimientos: any[] = [
    {
      id: 1,
      name: "Estado de Cuenta",
    },
    {
      id: 2,
      name: "Componentes de Gastos",
    },
  ];

  responsibles: any[] = [
    {
      id: 1,
      name: "Responsable 1",
    },
    {
      id: 2,
      name: "Responsable 2",
    },
  ];

  selectedTypeReq!: TypeRequeriment;
  selectedArea!: Area;
  selectedResponsible!: Responsible;

  formRequerimiento: FormGroup = this.formBuilder.group({
    id: [0],
    description: [""],
    typePartida: [""],
    typeDocument: [""],
    typeRequestDocument: [false],
    typeRequestDescrip: [false],
    typeRequestNuevo: [false],
    areaResponsible: [this.selectedArea, [Validators.required]],
    responsible: [this.selectedResponsible, [Validators.required]],
    dateDelivery: [""],
    acredita: [""],
    responsable: [""],
    state: [""],
  });

  filterGeneral: any[] = [];

  partidas: any[] = [
    {
      id: 1,
      name: 'Partida 1'
    },
    {
      id: 2,
      name: 'Partida 2'
    },
    {
      id: 3,
      name: 'Partida 3'
    }
  ]

  typesDocuments: any[] = [
    {
      id: 1,
      name: 'Tipo Documento 1'
    },
    {
      id: 2,
      name: 'Tipo Documento 2'
    },
    {
      id: 3,
      name: 'Tipo Documento 3'
    }
  ];

  areasResponsible: any[] = [
    {
      id: 1,
      name: 'Área Responsable 1'
    },
    {
      id: 2,
      name: 'Área Responsable 2'
    },
    {
      id: 3,
      name: 'Área Responsable 3'
    }
  ];

  search(event: any, list: any[]) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < list.length; i++) {
      let obj = list[i];
      if (obj.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(obj.name);
      }
    }

    this.filterGeneral = filtered;
  }

  verMas: boolean = true;
  isDescription: boolean = true;
  idRequerimiento: number = 0;
  applicaSubtr(text: string) {
    console.log(text);
    
    var texto = text.substr(0, 100) + '...';
    return texto;
  }

  saveDataReq() {
    if (this.formRequerimiento.invalid) {
      this.formRequerimiento.markAllAsTouched();
    } else {
      var requirement = new Requirement(this.formRequerimiento.value);
      requirement.id = this.requirements.length + 1;
      this.requirements.push(requirement);
      this.formRequerimiento.reset();
      this.formRequerimiento.controls["email"].setValue("ejemplo@mail.com.mx");
      this.displayNuevoReq = false;
    }
  }

  mandarCorreo() {
    window.location.href =
      "https://10.89.85.139:8643/auditoriags/envio/correoAuditoria";
    this.displayNuevoReq = false;
  }

  /************************SIDEBAR CREAR TIPO DE REQUERIMIENTO***************** */
  tipoDocumentosList: any[] = [
    {
      id: 1,
      name: "Tipo Documento 1",
    },
    {
      id: 2,
      name: "Tipo Documento 2",
    },
    {
      id: 3,
      name: "Tipo Documento 3",
    },
  ];

  getDataForm(event: any) {
    console.log("Data form: ", event);
  }

  /******************CONFIRMACIÓN DE ELIMINAR REQUERIMIENTO*************** */
  displayConfirma: boolean = false;
  idRequirement: number = 0;
  openModalConfirm(
    displayConfirma: boolean,
    message: string,
    icon: string,
    typeConfirma: string,
    id: number = 0
  ) {
    this.idRequirement = id;
    this.displayConfirma = displayConfirma;
    this.message = message;
    this.icon = icon;
    this.typeConfirma = typeConfirma;
  }

  deleteReq() {
    let index = this.requirements.findIndex((x) => x.id == this.idRequirement);
    this.requirements.splice(index, 1);
    this.displayConfirma = false;
  }

  getResutlModal(result: any) {
    console.log(result);
    if (result) {
      switch (this.typeConfirma) {
        case "delete":
          this.deleteReq();
          break;

        case "save":
          break;
      }
    } else {
      this.displayConfirma = false;
    }
  }
}
