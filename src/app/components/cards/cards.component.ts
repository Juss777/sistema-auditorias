import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Auditoria } from '../../class/auditoriasClass';

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styles: [],
})
export class CardsComponent implements OnInit {
  @Input() auditorias: Auditoria[] = [];
  @Output() auditoriaSelected: EventEmitter<Auditoria> = new EventEmitter();
  selected = new Auditoria({})

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() =>{
      this.selectedAuditoria(this.auditorias[0]);
    }, 100)
  }

  selectedAuditoria(auditoria: Auditoria){
    this.selected = auditoria;
    this.auditoriaSelected.emit(auditoria);
  }
}
