import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
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
  TypeDocument,
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
    {
      id: 1,
      nombre: "Banco Azteca",
      rfc: "BAZ37236236",
      siglas: "BAZ",
    },
    {
      id: 2,
      nombre: "Total Play",
      rfc: "TPL37236236",
      siglas: "TP",
    },
    {
      id: 3,
      nombre: "Elektra",
      rfc: "EKT37236236",
      siglas: "EKT",
    },
    {
      id: 4,
      nombre: "Italika",
      rfc: "ITK37236236",
      siglas: "ITK",
    },
    {
      id: 5,
      nombre: "Italika 2",
      rfc: "ITK37236236",
      siglas: "ITK",
    },
    {
      id: 6,
      nombre: "Italika 3",
      rfc: "ITK37236236",
      siglas: "ITK",
    },
    {
      id: 7,
      nombre: "Italika 4",
      rfc: "ITK37236236",
      siglas: "ITK",
    },
  ];

  representantes: Representante[] = [];

  areas: Area[] = [];

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

  ngOnInit(): void {}

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

  //EL CONTENIDO DE ESTE ARREGLO YA NO VA EN LA VERSIÓN DE FRONT_______________________________________________________________
  requirements: Requirement[] = [
    {
      id: 1,
      description:
        "Explique amplia y detalladamente en qué consisten las erogaciones por concepto de “Artículos Promocionales”; asimismo, en caso de que dichos artículos sean entregados a los clientes (acreditados) de la contribuyente, indique los requisitos que debe.",
      partida: "Generales",
      documentsType: [
        {
          id: 1,
          typeDocument: "Contratos",
          description: `Contratos... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.`,
          areaResponsible: "Jurídico",
          responsible: "Pepe",
          email: "pepe@elektra.com",
          idRequirement: 1,
          status: "",
          documents: [],
        },
      ],
      typeRequestDocumental: true,
      typeRequestDescriptive: false,
      areaResponsible: "Contabilidad",
      responsible: "",
      email: "",
      dateDelivery: "2022-11-25",
      acredita: "Acredita",
      state: "Pendiente de revisión",
    },
    {
      id: 2,
      description:
        "Explique amplia y detalladamente en qué consisten las erogaciones por concepto de “Artículos Promocionales”; asimismo, en caso de que dichos artículos sean entregados a los clientes (acreditados) de la contribuyente, indique los requisitos que debe.",
      partida: "Generales",
      documentsType: [
        {
          id: 5,
          typeDocument: "Fundamento Legal",
          description: `Fundamento Legal... ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.`,
          areaResponsible: "Área Responsable 5",
          responsible: "Pablo",
          email: "pablo@elektra.com",
          idRequirement: 2,
          status: "",
          documents: [],
        },
      ],
      typeRequestDocumental: "",
      typeRequestDescriptive: "",
      areaResponsible: "Contabilidad",
      responsible: "",
      email: "",
      dateDelivery: "",
      acredita: "",
      state: "Pendiente de revisión",
    },
  ];
  //________________________________________________________________________________________

  //YA NO VAN EN LA VERSIÓN DE FRONT_______________________________________________________________
  applicaSubtr(text: string) {
    var texto = text.substr(0, 100) + "...";
    return texto;
  }

  showAndHidden(tdShow: string, tdHidden: string) {
    var show: any = document.getElementById(tdShow);
    var hidden: any = document.getElementById(tdHidden);
    show.classList.remove("hidden");
    show.classList.add("show");

    hidden.classList.remove("show");
    hidden.classList.add("hidden");
  }
  //________________________________________________________________________________________________

  mandarCorreo() {
    window.location.href =
      "https://10.89.85.139:8643/auditoriags/envio/correoAuditoria";
  }

  /******************CONFIRMACIÓN DE ELIMINAR REQUERIMIENTO*************** */
  displayConfirma: boolean = false;
  idDataToDelete: number = 0;
  openModalConfirm(
    displayConfirma: boolean,
    message: string,
    icon: string,
    typeConfirma: string,
    id: number = 0
  ) {
    this.idDataToDelete = id;
    this.displayConfirma = displayConfirma;
    this.message = message;
    this.icon = icon;
    this.typeConfirma = typeConfirma;
  }

  deleteReq(id: number) {
    let index = this.requirements.findIndex((x) => x.id == id);
    this.requirements.splice(index, 1);
    this.displayConfirma = false;
  }

  getResutlModal(result: any) {
    console.log(result);
    if (result) {
      switch (this.typeConfirma) {
        case "delete":
          this.deleteReq(this.idDataToDelete);
          break;
      }
    } else {
      this.displayConfirma = false;
    }
  }
}
