import { Component, OnInit } from '@angular/core';
import { Contabilidad } from 'src/app/interface/contabilidad';
import { AuditoriaService } from 'src/app/services/auditorias.service';
import { ContabilidadService } from 'src/app/services/contabilidad.service';

@Component({
  selector: 'app-hub-avance-oficio',
  templateUrl: './hub-avance-oficio.component.html',
  styles: [],
})
export class HubAvanceOficioComponent implements OnInit {
  contabilidad!: Contabilidad[];
  constructor(
    public auditoriaService: AuditoriaService,
    private contabilidadService: ContabilidadService
  ) {}

  ngOnInit(): void {
    this.contabilidadService
      .getRegistros()
      .then((data) => (this.contabilidad = data));
  }
}
