import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AdminTarea,
  ColaboTarea,
  Desahogo,
  ReqColaborador,
  TablaRequrimientos,
} from "../interface/custom";
import { Tarea } from "../interface/tarea";
import { Task } from "../interface/task";

@Injectable({
  providedIn: "root",
})
export class CustomService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http
      .get<any>("assets/tasks.json")
      .toPromise()
      .then((res) => <Task[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getTarea() {
    return this.http
      .get<any>("assets/tarea.json")
      .toPromise()
      .then((res) => <Tarea[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getDesahogo() {
    return this.http
      .get<any>("assets/relief.json")
      .toPromise()
      .then((res) => <Desahogo[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getRequerimiento() {
    return this.http
      .get<any>("assets/requerimiento.json")
      .toPromise()
      .then((res) => <TablaRequrimientos[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getAdminTarea() {
    return this.http
      .get<any>("assets/adminTarea.json")
      .toPromise()
      .then((res) => <AdminTarea[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getColaboTarea() {
    return this.http
      .get<any>("assets/colaboTarea.json")
      .toPromise()
      .then((res) => <ColaboTarea[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getRequerimientoColaborador() {
    return this.http
      .get<any>("assets/reqColaborador.json")
      .toPromise()
      .then((res) => <ReqColaborador[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
