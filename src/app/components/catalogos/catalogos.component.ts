import { ThisReceiver } from "@angular/compiler";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UnidadNegocio } from "src/app/class/auditoriasClass";
import { AuditoriaService } from "../../services/auditorias.service";

@Component({
  selector: "app-catalogos",
  templateUrl: "./catalogos.component.html",
  styleUrls: [],
})
export class CatalogosComponent implements OnInit {
  @Input() catalog: string = "";
  @Input() catalogNameIn: string = "";

  @Input() list: any[] = [];

  @Output() formDataOut: EventEmitter<any> = new EventEmitter();
  @Output() visibleSidebar: EventEmitter<boolean> = new EventEmitter();
  @Output() catalogNameOut: EventEmitter<string> = new EventEmitter();

  

  filterGeneral: any[] = [];

  /**************UNIDAD DE NEGOCIO****************/
  formUnidadNegocio: FormGroup = this.formBuilder.group({
    id: [0],
    nombre: ["", [Validators.required]],
    rfc: ["", [Validators.required]],
    siglas: ["", [Validators.required]],
  });

  /**************FORM MIEMBROS DEL ÁREA / ADMINISTRADOR / ADMINISTRADOR CENTRAL / ADMINISTRADOR GENERAL****************/
  formMiembrosArea: FormGroup = this.formBuilder.group({
    id: [0],
    nombreArea: ["", [Validators.required]],
    nombre: ["", [Validators.required]],
    apellidoPat: ["", [Validators.required]],
    apellidoMat: ["", [Validators.required]],
    siglas: ["", [Validators.required]],
    email: ["", [Validators.required]],
  });

  /**************FORM CONTENCIOSO****************/
  formContencioso: FormGroup = this.formBuilder.group({
    id: [0],
    typeLawyer: ["", [Validators.required]],
    nombre: ["", [Validators.required]],
    apellidoPat: ["", [Validators.required]],
    apellidoMat: ["", [Validators.required]],
    siglas: ["", [Validators.required]],
    email: ["", [Validators.required]],
  });

  /**************FORM AUTORIDAD***************/
  formAutoridad: FormGroup = this.formBuilder.group({
    id: [0],
    nombreAutoridad: ["", [Validators.required]],
    sigla: ["", [Validators.required]]
  });

  materialidadChecked: boolean = false;
  legalidadChecked: boolean = false;
  @Input() tipoDocumentosList: any[] = [];
  filteredDocuments: any[] = [];
  /**************FORM ÁREA EQUIPO****************/
  formAreaEquipo: FormGroup = this.formBuilder.group({
    id: [0],
    nombreAutoridad: ["", [Validators.required]],
    nombreArea: ["", [Validators.required]],
  });

  /**************FORM AREA RESPONSABLE****************/
  formAreaResponsable: FormGroup = this.formBuilder.group({
    id: [0],
    areaResponsable: ["", [Validators.required]],
    grupoCorreo: ["", [Validators.required]],
    responsableArea: ["", [Validators.required]],
  });

  /**************FORM REPRESENTATE LEGAL****************/
  formRepresentante: FormGroup = this.formBuilder.group({
    id: [0],
    nombreUnidadNegocio: ["", [Validators.required]],
    nombre: ["", [Validators.required]],
    apellidoPat: ["", [Validators.required]],
    apellidoMat: ["", [Validators.required]],
  });

  /**************FORM TIPO DE RERQUERIMIENTO****************/
  formTipoRequerimiento: FormGroup = this.formBuilder.group({
    id: [0],
    tipoRequerimiento: ["", [Validators.required]],
    tipo: ["", [Validators.required]],
    tipoDocumento: ["", [Validators.required]],
    tipoDoc: ["", [Validators.required]],
  });

  constructor(
    public formBuilder: FormBuilder,
    public auditoriaService: AuditoriaService
  ) { }

  ngOnInit(): void {}

  addData(form: FormGroup, type: string) {
    if (form.invalid) {
      form.markAllAsTouched();
    } else {
      this.formDataOut.emit({ data: form.value, type });
      form.reset();
    }
  }

  filter(event: any, list: any[]) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < list.length; i++) {
      let obj = list[i];
      if (obj.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(obj.name);
      }
    }

    this.filteredDocuments = filtered;
  }

    @Input() data: any[] = [];
    @Input() totalRecords: number = 0;
    loading: boolean = false;
    rowsPerPageOptions: any[] = [5, 10, 20];
    rowNumber: number = 5;
    @Input() colspan: number = 5;
    cols: any[] = [
      { field: 'nombre' },
      { field: 'rfc' },
      { field: 'siglas' },
      { field: 'email' },
      { field: 'typeLawyer' },
      { field: 'nombreArea' },
    ];

    loadData(event: any) {  

      if(event.sortField != undefined && event.filters.list.value == null){
        this.data.sort(function(a, b) {
          var nameA = a.nombre.toUpperCase();
          var nameB = b.nombre.toUpperCase();
          if (event.sortOrder == 1){
            if (nameA < nameB) {
              return -1; 
            }
            if (nameA > nameB) {
              return 1;
            }
          } else {
            if (nameA > nameB) {
              return -1; 
            }
            if (nameA < nameB) {
              return 1;
            }
          }
          return 0; 
        });
      } 

      // if (event.filters.list) {
      //   if(event.filters.list.value != null && event.filters.list.value.nombre != '') {
      //     setTimeout(() => {
      //       this.data = this.list.filter(x => x.nombre == event.filters.list.value.nombre);
      //     }, 1000);
      //   }
      // }        
    }

    filterData(event: any){
      if (event == null) {
        this.data = this.list;
      } else {
        this.data = this.list.filter(x => x.nombre == event.nombre);
      }
    }

    paginate(event: any) {
      this.data = [];
  
      for (let i = event.first; i < event.rows * (event.page + 1); i++) {
        const element = this.list[i];
        if (element) {
          this.data.push(element);
        }
      }
    }

    changeRows(event: any){
      this.rowNumber = event.value;
      var _event = {
        first: 0,
        page: 0,
        pageCount: 1,
        rows: this.rowNumber
      }

      this.paginate(_event);
    }

    cancel(){
      this.visibleSidebar.emit(false);
    }


    catalogNameBK: string = '';
    catalogBK: string = this.catalog;
    listBK: any[] = [];
    isSecondSidebar: boolean = false;

    openSecondSidebar(type: string){
      this.catalogNameBK = this.catalogNameIn;
      this.catalogBK = this.catalog;
      this.listBK = this.list;

      switch (type) {
        case 'unidadNegocio':
          this.catalogNameOut.emit('Agregar unidad de negocio');
          this.catalog = 'unidadNegocio';
          this.list = [];
          this.isSecondSidebar = true;
          break;

        case 'areaEquipo':
          this.catalogNameOut.emit('Agregar área');
          this.catalog = 'areaEquipo';
          this.list = [];
          this.isSecondSidebar = true;
          break;

        case 'autoridad':
          this.catalogNameOut.emit('Agregar autoridad');
          this.catalog = 'autoridad';
          this.list = [];
          this.isSecondSidebar = true;
          break;
      
        default:
          break;
      }
      
    }

    toBack() {
      this.catalogNameOut.emit(this.catalogNameBK);
      this.catalog = this.catalogBK;
      this.list = this.listBK;
      this.isSecondSidebar = false;
    }
}
