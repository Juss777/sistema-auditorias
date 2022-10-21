import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  dButton = false;

  constructor(
    public formBuilder: FormBuilder,
    private _router: ActivatedRoute,
    public auditoriaService: AuditoriaService
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
    console.log(auditoria);

    if (auditoria.id > 0) {
      let index = this.auditoriaService.auditoriaDetalles.findIndex(
        (x) => x.id === auditoria.id
      );
      this.auditoriaService.auditoriaDetalles[index] = auditoria;
    } else {
      auditoria.id = this.auditoriaService.auditoriaDetalles.length + 1;
      this.auditoriaService.auditoriaDetalles.push(auditoria);
    }
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
      type: {
        id: 1,
        name: "Estado de Cuenta",
      },
      area: {
        id: 1,
        responsableArea: "Representante 1",
        grupoCorreo: "A",
        areaResponsable: "Area 1",
      },
      responsible: {
        id: 1,
        name: "Responsable 1",
      },
      email: "ejemplo@mail.com.mx",
      state: "Pendiente",
    },
    {
      id: 2,
      type: {
        id: 1,
        name: "Estado de Cuenta 2",
      },
      area: {
        id: 1,
        responsableArea: "Representante 1",
        grupoCorreo: "A",
        areaResponsable: "Area 1",
      },
      responsible: {
        id: 1,
        name: "Responsable 1",
      },
      email: "ejemplo@mail.com.mx",
      state: "Pendiente",
    },
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
     type: [this.selectedTypeReq, [Validators.required]],
     area: [this.selectedArea, [Validators.required]],
     responsible: [this.selectedResponsible, [Validators.required]],
     email: ["ejemplo@mail.com.mx"],
     state: [""],
   });
 
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
   confirmDelete(id: number){
    this.idRequirement = id;
    this.displayConfirma = true;
   }

   deleteReq(){ 
    let index = this.requirements.findIndex(x => x.id == this.idRequirement);
    this.requirements.splice(index, 1);
    this.displayConfirma = false;
   }

}
