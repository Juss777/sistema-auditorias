import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Area, TypeDocument, Requirement } from '../../class/auditoriasClass';
import { AuditoriaService } from '../../services/auditorias.service';
import { Chips } from '../../interface/chips';
import { ActivatedRoute } from '@angular/router';
import { ReqService } from '../../services/req.service';

@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: []
})
export class RequerimientoComponent implements OnInit {
  mainTitle: string = "Nuevo requerimiento";

  selectedArea!: Area;
  filterGeneral: any[] = [];
  partidas: any[] = [];

  visibleSidebar: boolean = false;
  catalogName: string = "";
  catalog: string = "";
  inputSearch: string = "";
  listaGeneral: any[] = [];

  titleModal: string = "";

  areasResponsible: any[] = [];
  buttonDisabled: boolean = false;

  displayModalDocument: boolean = false;

  documents: TypeDocument[] = [];

  requirement = new Requirement({});
  
  idDocumentSelected: number = 0;
  documentSelected = new TypeDocument({});

  idRequirement: any;

  activateBtnAddDocument: boolean = false;

  //change___________________________________
  isEdit: boolean = false;
  titleBtnAgregar: string = "Agregar";

  constructor(
    public formBuilder: FormBuilder, 
    public auditoriaService: AuditoriaService,
    public requirementService: ReqService,
    private _route: ActivatedRoute,
  ) {
    this.idRequirement = this._route.snapshot.paramMap.get("id");
  }

  formRequerimiento: FormGroup = this.formBuilder.group({
    id: [0],
    partida: ["", [Validators.required]],
    typeRequestDocumental: [false],
    typeRequestDescriptive: [false],
    acredita: ["", [Validators.required]],
    description: ["", [Validators.required]], 
    dateDelivery: ["", [Validators.required]], 
    documentsType: [[]],
    areaResponsible: [""],
    responsible: [""],
    email: [""],
    state: [""],
  });

  formDocuments: FormGroup = this.formBuilder.group({
    id: [0],
    typeDocument: ["", [Validators.required,]],
    description: ["", [Validators.required,]],
    areaResponsible: ["", [Validators.required,]],
    responsible: ["", [Validators.required,]],
    email: ["", [Validators.required,]],
    idRequirement: [0]
  });

  //change__________________________
  ngOnInit(): void {
    if (this.idRequirement > 0) {
      this.mainTitle = "Editar requerimiento";
      this.getRequirements(this.idRequirement);
      this.formRequerimiento.disable(); 
      this.isEdit = true;
      this.titleBtnAgregar = 'Editar';
      this.activateBtnAddDocument = true;
    }
    
  }

  getRequirements(idRequirement: any){
    this.requirementService.getRequirements().then((result: any) => {
      const data: Requirement[] = result;
      this.requirement = new Requirement(data.find(x => x.id == idRequirement));
      this.formRequerimiento.setValue(this.requirement);
      this.documents = this.requirement.documentsType;
    });
  }

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

  //change___________________________________________________
  saveDataReq() {
    if (this.formRequerimiento.invalid) {
      this.formRequerimiento.markAllAsTouched();
    } else {
      var requirement = new Requirement(this.formRequerimiento.value);
      
      if (this.requirement.id == 0) {
        requirement.id = this.requirementService.getIdRandom(); 
        this.formRequerimiento.controls['id'].setValue(requirement.id);
      }
      
      this.formRequerimiento.disable(); 
      this.isEdit = true; 
      this.titleBtnAgregar = this.isEdit ? 'Editar' : 'Agregar';
      this.activateBtnAddDocument = true;
    }
  }

  //change_________________________________________
  activeFormToEdit: boolean = false;
  edit(idRequirement: any) {
    console.log(idRequirement);
    this.titleBtnAgregar = 'Salvar';
    this.activeFormToEdit = !this.activeFormToEdit;
    if (this.activeFormToEdit) {
      this.formRequerimiento.enable();
    } else {
      this.saveDataReq();
    }
  }

  mostrarDocumentos(idDocument: number){
    this.idDocumentSelected = idDocument;
    this.documentSelected = new TypeDocument(this.documents.find(x => x.id == idDocument));

  }

  openModalDocument(edit: boolean = false){
    this.displayModalDocument = true;
    if (edit) {
      this.titleModal = 'Editar documento';
      this.formDocuments.setValue(this.documentSelected);
    } else {
      this.titleModal = 'Nuevo documento';
      let dataDocumentClear = new TypeDocument({});
      this.formDocuments.setValue(dataDocumentClear);
    }
  }

  openSidebarCatalog(catalogName: string, catalog: string, activeSidebar: boolean){
    this.visibleSidebar = activeSidebar;
    this.catalog = catalog;
    this.catalogName = catalogName;
  }

  countChars: number = 0;
  isMax: boolean = false;
  maxCharacters: number = 3000;
  countCharacters(event: any) {
    this.countChars = event.target.value.length;
    if (this.countChars === this.maxCharacters) {
      this.isMax = true;
    } else {
      this.isMax = false;
    }
  }

  getValueDisplayModal(event: any){
    this.displayModalDocument = event;
  }

  getDataFormDocument(document: TypeDocument){
    if (document.id == 0) {
      document.id = this.requirementService.getIdRandom();
      this.documents.push(document)
    } else {
      let index = this.documents.findIndex(x => x.id == document.id);
      this.documents[index] = document;
    }
    
  }

  getDataForm(event: any) {
    console.log("Data form: ", event);
  }

  cancelSidebar(event: any){
    this.visibleSidebar = event;
  }

  changeNameCatalog(event: any){
    this.catalogName = event;
  }

  getCatalogNameModal(value: any){ this.catalogName = value; }
  getCatalogModal(value: any){ this.catalog = value; }
  getValueVisibleSidebar(value: any){ this.visibleSidebar = value; }
  

}
