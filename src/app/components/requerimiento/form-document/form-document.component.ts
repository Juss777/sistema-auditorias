import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TypeDocument, Area, Requirement } from '../../../class/auditoriasClass';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReqService } from '../../../services/req.service';
import { AuditoriaService } from '../../../services/auditorias.service';

@Component({
  selector: 'app-form-document',
  templateUrl: './form-document.component.html',
  styleUrls: []
})
export class FormDocumentComponent implements OnInit {

  filterGeneral: any[] = [];
  partidas: any[] = [];

  @Output() displayModalDocument: EventEmitter<boolean> = new EventEmitter();
  @Output() dataForm: EventEmitter<TypeDocument> = new EventEmitter();

  @Output() visibleSidebar: EventEmitter<boolean> = new EventEmitter();
  @Output() catalogName: EventEmitter<string> = new EventEmitter();
  @Output() catalog: EventEmitter<string> = new EventEmitter();

  typesDocuments: any[] = [];
  areasResponsible: any[] = [];

  // typesDocumentsChips: TypeDocument[] = [
  //   {
  //     id: 1,
  //     typeDocument: "Adendas",
  //     descriptionDocument:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   },
  // ];


  constructor(
    public formBuilder: FormBuilder,
    public auditoriaService: AuditoriaService,
    public requirementService: ReqService,
  ) { }

  @Input() formDocuments: FormGroup = this.formBuilder.group({
    id: [0],
    typeDocument: ["", [Validators.required,]],
    description: ["", [Validators.required,]],
    areaResponsible: ["", [Validators.required,]],
    responsible: ["", [Validators.required,]],
    email: ["", [Validators.required,]],
    idRequirement: [0]
  });

  ngOnInit(): void {
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

  saveData() {
    if (this.formDocuments.invalid) {
      this.formDocuments.markAllAsTouched();
    } else {
      var document = new TypeDocument(this.formDocuments.value);
      this.dataForm.emit(document);      
      this.formDocuments.reset();
      this.displayModalDocument.emit(false);
    }
  }

  openModalCatalog(catalogName: string, catalog: string, activeModal: boolean){
    this.catalogName.emit(catalogName);
    this.catalog.emit(catalog);
    this.visibleSidebar.emit(activeModal);
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


}
