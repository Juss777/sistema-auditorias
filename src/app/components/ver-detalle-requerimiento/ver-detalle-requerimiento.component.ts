import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Chips } from "src/app/interface/chips";
import { Tarea } from "src/app/interface/tarea";
import { Documents } from "src/app/interface/documents";
import { CustomService } from "src/app/services/custom.service";
import { TypeDocument } from "src/app/class/auditoriasClass";
interface Opciones {
  name: string;
}
@Component({
  selector: "app-ver-detalle-requerimiento",
  templateUrl: "./ver-detalle-requerimiento.component.html",
  styles: [
    `
      .example {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        cursor: pointer;
        font-family: var(--main-font-regular);
        color: var(--color-negro);
      }
      .active-switch {
        background-color: var(--color-success-toast);
        color: var(--color-blanco);
      }
    `,
  ],
})
export class VerDetalleRequerimientoComponent implements OnInit {
  opt!: Opciones[];
  tarea!: Tarea[];

  colaborador: boolean = false;

  archivos: any = {
    cantidadArchivos: 0,
    documentos: [],
  };

  @ViewChild("file", { static: false }) file!: ElementRef;

  @ViewChild("tipo", { static: false }) tipo!: ElementRef;

  chips: TypeDocument[] = [
    {
      id: 1,
      typeDocument: "Contratos",
      description:
        "Contratos... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris\n      nisi ut aliquip ex ea commodo consequat.",
      areaResponsible: "Jurídico",
      responsible: "Pepe",
      email: "pepe@elektra.com",
      idRequirement: 1,
      status: true,
      documents: [],
    },
    {
      id: 2,
      typeDocument: "Adendas",
      description:
        "Adendas... ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris\n      nisi ut aliquip ex ea commodo consequat.",
      areaResponsible: "Área 51",
      responsible: "Juan",
      email: "juan@elektra.com",
      idRequirement: 1,
      status: true,
      documents: [],
    },
    {
      id: 3,
      typeDocument: "Anexos",
      description:
        "Anexos... ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris\n      nisi ut aliquip ex ea commodo consequat.",
      areaResponsible: "Área Responsable 3",
      responsible: "Paquito",
      email: "paquito@elektra.com",
      idRequirement: 1,
      status: true,
      documents: [],
    },
    {
      id: 4,
      typeDocument: "Explicación",
      description:
        "Explicación... ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris\n      nisi ut aliquip ex ea commodo consequat.",
      areaResponsible: "Área Responsable 4",
      responsible: "Javier",
      email: "javier@elektra.com",
      idRequirement: 1,
      status: true,
      documents: [],
    },
    {
      id: 5,
      typeDocument: "Fundamento Legal",
      description:
        "Fundamento Legal... ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris\n      nisi ut aliquip ex ea commodo consequat.",
      areaResponsible: "Área Responsable 5",
      responsible: "Pablo",
      email: "pablo@elektra.com",
      idRequirement: 2,
      status: true,
      documents: [],
    },
    {
      id: 6,
      typeDocument: "Informes",
      description:
        "Informes... ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris\n      nisi ut aliquip ex ea commodo consequat.",
      areaResponsible: "Área Responsable 6",
      responsible: "Maria",
      email: "maria@elektra.com",
      idRequirement: 2,
      status: true,
      documents: [],
    },
    {
      id: 8,
      typeDocument: "Bitácora",
      description:
        "Bitácora... ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris\n      nisi ut aliquip ex ea commodo consequat.",
      areaResponsible: "Área Responsable 8",
      responsible: "Alicia",
      email: "alicia@elektra.com",
      idRequirement: 2,
      status: false,
      documents: [],
    },
  ];

  save = false;
  toReturn = true;
  selectedOpciones!: Opciones;

  displayModal: boolean = false;
  // displayConfirmar: boolean = false;
  typeModal: string = "";
  headerModal: string = "";

  chipDisable: boolean = true;
  showDocuments: boolean = false;

  contrato: boolean = false;
  adendas: boolean = false;
  anexos: boolean = false;
  explicacion: boolean = false;
  fundamento_legal: boolean = false;
  informes: boolean = false;

  files = [
    {
      id: "1",
      estatus: false,
    },
  ];

  semaphore = [
    {
      id: 1,
      estatus: "Pendiente de entrega",
    },
  ];

  constructor(public customService: CustomService) {
    this.opt = [
      { name: "Entregado, pendiente de revisión" },
      { name: "No entregado" },
      { name: "Listo" },
      { name: "Entregado, no se presenta" },
    ];
  }

  ngOnInit(): void {
    this.customService.getTarea().then((data) => (this.tarea = data));
  }

  download = [
    {
      id: 1,
      name: "Edo. Cuenta 2016-1.pdf",
    },
    {
      id: 2,
      name: "Edo. Cuenta 2016-2.pdf",
    },
    {
      id: 3,
      name: "Edo. Cuenta 2016-3.pdf",
    },
    {
      id: 4,
      name: "Edo. Cuenta 2016-4.pdf",
    },
    {
      id: 5,
      name: "Edo. Cuenta 2016-5.pdf",
    },
  ];

  doc_contratos: Documents[] = [];
  doc_adendas: Documents[] = [];
  doc_anexos: Documents[] = [];
  doc_explicacion: Documents[] = [];
  doc_fundamentos: Documents[] = [];
  doc_informes: Documents[] = [];

  changeLegal() {
    this.save = true;
    this.toReturn = false;
  }

  showModal(typeModal: string) {
    this.typeModal = typeModal;
    this.displayModal = true;
  }

  idChip: number = 0;
  typeDocumentSelected = new TypeDocument({});
  mostrarDocumentos(chipId: number) {
    this.idChip = chipId;
    this.typeDocumentSelected = new TypeDocument(
      this.chips.find((x) => x.id == chipId)
    );
  }

  countChars: number = 0;
  isMax: boolean = false;
  maxCharacters: number = 250;

  countCharsBita: number = 0;
  isMaxBita: boolean = false;
  maxCharactersBita: number = 250;

  countCharacters(event: any, idCount: number) {
    if (idCount == 1) {
      this.countChars = event.target.value.length;
      if (this.countChars === this.maxCharacters) {
        this.isMax = true;
      } else {
        this.isMax = false;
      }
    } else {
      this.countCharsBita = event.target.value.length;
      if (this.countCharsBita === this.maxCharactersBita) {
        this.isMaxBita = true;
      } else {
        this.isMaxBita = false;
      }
    }
  }

  cambioPAdm() {
    this.colaborador = false;
    if (this.save) {
      this.toReturn = false;
    } else {
      this.toReturn = true;
    }
  }

  cambioPCol() {
    this.colaborador = true;
    this.toReturn = false;
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

  saveDocuments() {
    var chip: any = this.chips.find((x) => x.id === this.idChip);
    for (let i = 0; i < this.archivos.documentos.length; i++) {
      const documento = this.archivos.documentos[i];
      chip.documents.push(documento);
    }

    console.log(this.chips);
    this.archivos.documentos = [];
  }
  public agregarNuevosDoc() {
    switch (this.idChip) {
      case 1:
        this.doc_contratos.push({
          id: this.doc_contratos.length + 1,
          name: this.selectedFile.name,
        });
        break;

      case 2:
        this.doc_adendas.push({
          id: this.doc_adendas.length + 1,
          name: this.selectedFile.name,
        });
        break;

      case 3:
        this.doc_anexos.push({
          id: this.doc_anexos.length + 1,
          name: this.selectedFile.name,
        });
        break;

      case 4:
        this.doc_explicacion.push({
          id: this.doc_explicacion.length + 1,
          name: this.selectedFile.name,
        });
        break;

      case 5:
        this.doc_fundamentos.push({
          id: this.doc_fundamentos.length + 1,
          name: this.selectedFile.name,
        });
        break;

      case 6:
        this.doc_informes.push({
          id: this.doc_informes.length + 1,
          name: this.selectedFile.name,
        });
        break;

      default:
        break;
    }
  }

  public eliminarDocs(i: number) {
    this.typeDocumentSelected.documents.splice(i, 1);
    console.log(this.chips);
  }

  cargarArchivo(event: any) {
    var value = event.target.value;
    var valueSplit: string[] = value.split("\\");
    var nombreArchivo = valueSplit[valueSplit.length - 1];

    event.preventDefault();
    event.stopPropagation();

    var file = this.archivos.documentos.find(
      (documento: any) => documento.name === nombreArchivo
    );
    if (!file) {
      this.archivos.cantidadArchivos =
        this.archivos.cantidadArchivos + this.file.nativeElement.files.length;
      var encontrado = false;
      for (let file of this.file.nativeElement.files) {
        encontrado = false;

        if (!encontrado) {
          this.archivos.documentos.push(file);
          console.log(this.archivos.documentos);
        } else {
          this.archivos.documentos.splice(1);
        }
      }
    }
  }

  eliminarArchivo(index: number) {
    this.archivos.documentos.splice(index, 1);
  }
}
