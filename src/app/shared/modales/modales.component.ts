import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Desahogo, DesahogoList } from "src/app/interface/custom";
import { Req } from "src/app/interface/req";
import { CustomService } from "src/app/services/custom.service";
import { ReqService } from "src/app/services/req.service";

@Component({
  selector: "app-modales",
  templateUrl: "./modales.component.html",
  styles: [],
})
export class ModalesComponent implements OnInit {
  requerimiento!: Req[];
  desahogo!: Desahogo[];
  list!: DesahogoList[];
  inputHidden: boolean = false;
  buttonDisabled: boolean = false;

  @Input() displayModal: boolean = false;
  // @Input() displayDesahogoTabla: boolean = false;
  @Input() typeModal: string = "";

  formEstrategia: FormGroup = this.formBuilder.group({
    desahogo: [""],
    prorroga: [""],
    comentarios: [""],
  });

  constructor(
    public formBuilder: FormBuilder,
    public reqService: ReqService,
    public customService: CustomService
  ) {
    this.list = [
      { id: "1", nombre: "Entregar información completa" },
      { id: "2", nombre: "Entrega parcial" },
      { id: "3", nombre: "No entregar" },
    ];
  }

  ngOnInit(): void {
    this.reqService.getRegistros().then((data) => (this.requerimiento = data));
    this.customService.getDesahogo().then((data) => (this.desahogo = data));
  }

  changeDesahogo() {
    this.inputHidden = true;
    this.buttonDisabled = true;
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
