import { Component, OnInit } from "@angular/core";
import { Chips } from "src/app/interface/chips";
import { Tarea } from "src/app/interface/tarea";
import { CustomService } from "src/app/services/custom.service";
interface Opciones {
  name: string;
}
@Component({
  selector: "app-ver-detalle-requerimiento",
  templateUrl: "./ver-detalle-requerimiento.component.html",
  styles: [],
})
export class VerDetalleRequerimientoComponent implements OnInit {
  opt!: Opciones[];
  tarea!: Tarea[];
  chips: Chips[] = [
    {
      id: 1,
      name: 'Contratos',
      status: true
    },
    {
      id: 2,
      name: 'Adendas',
      status: true
    },
    {
      id: 3,
      name: 'Anexos',
      status: true
    },
    {
      id: 4,
      name: 'Explicación',
      status: true
    },
    {
      id: 5,
      name: 'Fundamento legal',
      status: true
    },
    {
      id: 6,
      name: 'Informes',
      status: true
    },
    {
      id: 7,
      name: 'Bitácoras',
      status: false
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

  changeLegal() {
    this.save = true;
    this.toReturn = false;
  }

  showModal(typeModal: string) {
    this.typeModal = typeModal;
    this.displayModal = true;
  }


  idChip: number = 0;
  mostrarDocumentos(chipId: number){
    this.idChip = chipId;
    this.contrato = false;
    this.adendas = false;
    switch (chipId) {

      case 1:
        this.contrato = true;
        break;

      case 2:
        this.adendas = true;
        break;

      default:
        break;
    }
  }
  

  countChars: number = 0;
  isMax: boolean = false;
  maxCharacters: number = 250;
  countCharacters(event: any) {
    this.countChars = event.target.value.length;
    if (this.countChars === this.maxCharacters) {
      this.isMax = true;
    } else {
      this.isMax = false;
    }
  }
}
