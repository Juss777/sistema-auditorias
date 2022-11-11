import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  AfterViewInit,
} from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  Area,
  Auditoria,
  Etapa,
  Representante,
  UnidadNegocio,
} from "src/app/class/auditoriasClass";
import { AuditoriaService } from "../../services/auditorias.service";

// Translate

import { TranslateService } from "@ngx-translate/core";
import { PrimeNGConfig } from "primeng/api";

import esLocale from "@fullcalendar/core/locales/es";
import { CalendarOptions } from "@fullcalendar/angular";
import { Router } from "@angular/router";

interface Authority {
  name: string;
}
interface Requerimiento {
  name: string;
}
interface IArea {
  name: string;
}
interface Responsable {
  name: string;
}

@Component({
  selector: "app-form-auditoria",
  templateUrl: "./form-auditoria.component.html",
  styleUrls: ["./form-auditoria.component.scss"],
})
export class FormAuditoriaComponent implements OnInit, AfterViewInit {
  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    locale: esLocale,
  };

  es: any;
  @Input() isReading: boolean = false;

  @Input() unidadeNegocio: UnidadNegocio[] = [];
  @Input() representantes: Representante[] = [];
  @Input() areas: Area[] = [];
  @Input() auditoria = new Auditoria({});
  @Input() responsablesArea: Representante[] = [];
  @Input() adminsGenerales: Representante[] = [ ];
  @Input() adminsCentrales: Representante[] = [];
  @Input() admin: Representante[] = [ ];
  @Input() responsableAll: any[] = [];
  @Input() contenciosoAll: any[] = [];
  @Input() autoridadAll: any[] = [];
  @Input() areaAll: any[] = [];
  @Input() instrumentosPublicos: any[] = [ ];

  @Input() idAuditoria: any;

  filterGeneral: any[] = [];
  listaGeneral: any[] = [];

  inputSearch: string = "";

  @Output() auditoriaDataOut: EventEmitter<Auditoria> = new EventEmitter();
  @Output() auditoriaDataEtapaOut: EventEmitter<Etapa> = new EventEmitter();

  areaEquipoForm: FormGroup = this.formBuilder.group({
    area: ["", Validators.required],
    responsable: ["", Validators.required],
  });

  formAuditoria: FormGroup = this.formBuilder.group({
    id: [0],
    anio: ["", Validators.required],
    unidadNegocio: ["", [Validators.required, Validators.min(1)]],
    siglas: [""],
    nombre: [""],
    monto: ["", Validators.required],

    representanteLegal: this.formBuilder.array([
      this.formBuilder.control(""),
    ]),

    instrumentoPublicoPoder: this.formBuilder.array([
      this.formBuilder.control(""),
    ]),
    instrumentoPublico: this.formBuilder.array([this.formBuilder.control("")]),

    areaEquipo: this.formBuilder.array([this.formBuilder.control("")]),
    responsableEquipo: this.formBuilder.array([this.formBuilder.control("")]),

    contencioso: [""],

    equipo: [""],

    autoridad: [""],
    area: [0],
    administradorGeneral: [""],
    administradorCentral: [""],
    administrador: [""],

    conceptos: [""],
    defensa: [""],

    tipoCard: [""],
    active: [false],
  });

  visibleSidebar: any;
  catalogName: string = "";
  catalog: string = "";

  formBuzon = false;
  formFisico = true;
  fechaTermino = true;

  formEtapa: FormGroup = this.formBuilder.group({
    tipoNotificacion: [""],
    existeMensaje: [""],
    fechaMensaje: [""],
    fechaNotifacion: [""],
    tipoArchivo: [""],
    notificacionTipo: [""],
    fechaTermino: [""],
    numeroOficio: [""],
    cumpleLey: [""],
    comentario: [""],
  });

  newReq: boolean = false;
  newArea: boolean = false;
  displayReq: boolean = false;
  displayArea: boolean = false;
  varEditor: boolean = false;

  requerimientos!: Requerimiento[];
  selectedReq!: Requerimiento;

  selectedArea!: IArea;

  responsables!: Responsable[];
  selectedResponsable!: Responsable;

  tipoComunicado: string = "citatorio";
  tipoMensaje: string = "citatorio";
  tipoDocumento: string = "Citatorio";

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

  filesInstrumentoPublico = [
    {
      id: "file-1",
      label: "Subir instrumento",
      name: "Subir documento",
      estatus: false,
    },
  ];

  message: string = '';
  icon: string = '';
  typeConfirma: string = "";
  displayConfirma: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public auditoriaService: AuditoriaService,
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.formAuditoria.controls["siglas"].disable();
    this.formAuditoria.controls["nombre"].disable();
    if (this.auditoria.id > 0) {
      this.setDataFormAuditoria(this.auditoria);
      this.formAuditoria.disable();
    }
  }

  ngAfterViewInit() {
    //this.translateChange("es");
  }

  // translateChange(lang: string) {
  //   this.translateService.use(lang);
  //   this.translateService
  //     .get("primeng")
  //     .subscribe((res) => this.primengConfig.setTranslation(res));
  // }

  search(event: any, list: any[]) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < list.length; i++) {
      let obj = list[i];
      if (obj.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(obj.nombre);
      }
    }

    this.filterGeneral = filtered;
  }

  setInputsRepresentanteLegal(representanteLegal: any[]) {
    for (let i = 0; i < representanteLegal.length - 1; i++) {
      this.addInputRepresentanteLegal();
    }
  }

  setInputsInstrumentoPublicoPoder(instrumentoPublicoPoder: any[]) {
    for (let i = 0; i < instrumentoPublicoPoder.length - 1; i++) {
      this.addInputsInstrumentoPublico();
    }
  }

  setInputsArea(areaEquipo: any[]) {
    for (let i = 0; i < areaEquipo.length - 1; i++) {
      this.addInputsArea();
    }
  }

  setDataFormAuditoria(auditoria: Auditoria) {
    var audi = new Auditoria(auditoria);
    this.setInputsRepresentanteLegal(audi.representanteLegal);
    this.setInputsInstrumentoPublicoPoder(audi.instrumentoPublicoPoder);
    this.filesInstrumentoPublico.forEach((a) => {
      audi.instrumentoPublico.forEach((b) => {
        a.name = b;
        a.estatus = true;
      });
    });

    this.setInputsArea(audi.areaEquipo);
    this.formAuditoria.setValue(audi);
  }

  activaDesactivarModificar() {
    this.isReading = !this.isReading;
    
    if (this.isReading) {
      this.formAuditoria.disable();
    } 
    else {
      this.formAuditoria.enable();
      this.formAuditoria.controls["siglas"].disable();
      this.formAuditoria.controls["nombre"].disable();
    }
  }

  nombreAuditoria: string = "";
  obtenerSiglas(event: any) {
    if (event.target.textContent) {
      this.formAuditoria.controls["siglas"].setValue(
        this.getSiglas(event.target.textContent).siglas
      );

      this.formAuditoria.controls["nombre"].setValue(
        this.getSiglas(event.target.textContent).siglas +
          " " +
          this.formAuditoria.controls["anio"].value
      );
    } else {
      if (this.formAuditoria.controls["unidadNegocio"].value) {
        this.formAuditoria.controls["nombre"].setValue(
          this.formAuditoria.controls["siglas"].value +
            " " +
            this.formAuditoria.controls["anio"].value
        );
      } else {
        this.formAuditoria.controls["nombre"].setValue(
          this.formAuditoria.controls["anio"].value
        );
      }
    }
  }

  getSiglas(nombre: any): any {
    return this.unidadeNegocio.find((x) => x.nombre === nombre);
  }

  saveData() {
    if (this.formAuditoria.invalid) {
      this.formAuditoria.markAllAsTouched();
    } else {
      console.log(this.formAuditoria);

      var auditoria = new Auditoria(this.formAuditoria.value);

      var etapa = new Etapa(this.formEtapa.value);

      this.auditoriaDataOut.emit(auditoria);
      this.auditoriaDataEtapaOut.emit(etapa);

      if (this.auditoria.id > 0) {
        this.activaDesactivarModificar();
      } else {
        this.formAuditoria.reset();
      }
    }
  }

  cancelCreate() {
    this.formAuditoria.reset();
    this._router.navigate(['/']);
  }

  get representanteLegal() {
    return this.formAuditoria.get("representanteLegal") as FormArray;
  }

  get instrumentoPublicoPoder() {
    return this.formAuditoria.get("instrumentoPublicoPoder") as FormArray;
  }

  get instrumentoPublico() {
    return this.formAuditoria.get("instrumentoPublico") as FormArray;
  }

  get areaEquipo() {
    return this.formAuditoria.get("areaEquipo") as FormArray;
  }

  get responsableEquipo() {
    return this.formAuditoria.get("responsableEquipo") as FormArray;
  }

  addInputRepresentanteLegal() {
    this.representanteLegal.push(
      this.formBuilder.control("", [Validators.required, Validators.min(1)])
    );
  }

  addInputsInstrumentoPublico() {
    this.filesInstrumentoPublico.push({
      id: `file-${this.filesInstrumentoPublico.length + 1}`,
      name: `subirInstrumento-${this.filesInstrumentoPublico.length + 1}`,
      label: `Subir instrumento ${this.filesInstrumentoPublico.length + 1}`,
      estatus: false,
    });
    this.instrumentoPublicoPoder.push(this.formBuilder.control(""));
    this.instrumentoPublico.push(this.formBuilder.control(""));
  }

  addInputsArea() {
    this.areaEquipo.push(this.formBuilder.control(""));
    this.responsableEquipo.push(this.formBuilder.control(""));
  }

  deleteInstrumentPublico(index: number) {
    this.instrumentoPublicoPoder.removeAt(index);
    this.instrumentoPublico.removeAt(index);
    this.filesInstrumentoPublico.splice(index, 1);
  }

  deleteRepresentanteLegal(index: number) {
    this.representanteLegal.removeAt(index);
  }

  deleteFormArea(index: number) {
    this.areaEquipo.removeAt(index);
  }

  getDataForm(event: any) {
    console.log("Data: ", event);
    switch (event.type) {
      case "unidadNegocio":
        event.data.id = this.unidadeNegocio.length + 1;
        this.unidadeNegocio.push(event.data);
        break;

      case "areaResponsable":
        event.data.id = this.areas.length + 1;
        this.areas.push(event.data);
        break;

      case "area":
        event.data.id = this.areaAll.length + 1;
        this.areaAll.push(event.data);
        break;

      case "representanteLegal":
        event.data.id = this.representantes.length + 1;
        this.representantes.push(event.data);
        break;

      case "administradorGeneral":
        event.data.id = this.adminsGenerales.length + 1;
        this.adminsGenerales.push(event.data);
        break;

      case "administradorCentral":
        event.data.id = this.adminsCentrales.length + 1;
        this.adminsCentrales.push(event.data);
        break;

      case "administradorArea":
        event.data.id = this.admin.length + 1;
        this.admin.push(event.data);
        break;

      case "instrumento":
        event.data.id = this.instrumentosPublicos.length + 1;
        this.instrumentosPublicos.push(event.data);
        break;

      default:
        break;
    }
  }

  selectedFile: any;
  loadedFileG: any;
  handleFileInput(loadedFile: any, file: any) {
    this.loadedFileG = loadedFile;
    this.selectedFile = file;
    this.selectedFile.file = this.loadedFileG.target.files[0];
    this.selectedFile.estatus = true;
    this.selectedFile.name = this.loadedFileG.target.files[0].name;
  }

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

  openModalConfirm(displayConfirma: boolean, message: string, icon: string, typeConfirma:string){
    this.displayConfirma = displayConfirma;
    this.message = message;
    this.icon = icon;
    this.typeConfirma = typeConfirma;
  }

  getResutlModal(result: any){
    if (result) {
      switch (this.typeConfirma) {
        case 'save':
          this.saveData();
          break;
      
        case 'cancel':
          this.cancelCreate();
          break;
      }
      
    }

    this.displayConfirma = false;
    
  }

  cancelSidebar(event: any){
    this.visibleSidebar = event;
  }
}
