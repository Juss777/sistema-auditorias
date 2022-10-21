import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contabilidad } from "../interface/contabilidad";
// import { Contabilidad } from '../interface/contabilidad';

@Injectable({
  providedIn: "root",
})
export class ContabilidadService {
  constructor(private http: HttpClient) {}

  getRegistros() {
    return this.http
      .get<any>("assets/contabilidad.json")
      .toPromise()
      .then((res) => <Contabilidad[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
