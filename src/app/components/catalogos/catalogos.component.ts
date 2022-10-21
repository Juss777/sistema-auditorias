import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuditoriaService } from "../../services/auditorias.service";

@Component({
  selector: "app-catalogos",
  templateUrl: "./catalogos.component.html",
  styleUrls: ["./catalogos.component.scss"],
})
export class CatalogosComponent implements OnInit {
  @Input() catalog: string = "";
  @Input() catalogName: string = "";
  @Input() list: any[] = [];
  @Output() formDataOut: EventEmitter<any> = new EventEmitter();

  formUnidadNegocio: FormGroup = this.formBuilder.group({
    id: [0],
    nombre: ["", [Validators.required]],
    rfc: ["", [Validators.required]],
    siglas: ["", [Validators.required]],
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
  materialidadChecked: boolean = false;
  legalidadChecked: boolean = false;
  @Input() tipoDocumentosList: any[] = [];
  filteredDocuments: any[] = [];
  /**************FORM TIPO DE RERQUERIMIENTO****************/
  formArea: FormGroup = this.formBuilder.group({
    id: [0],
    nombre: ["", [Validators.required]],
  });

  constructor(
    public formBuilder: FormBuilder,
    public auditoriaService: AuditoriaService
  ) {}

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
}
