import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Req } from "../interface/req";

@Injectable({
  providedIn: "root",
})
export class ReqService {
  constructor(private http: HttpClient) {}

  getRegistros() {
    return this.http
      .get<any>("assets/req.json")
      .toPromise()
      .then((res) => <Req[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getRequirements() {
    return this.http
      .get<any>("assets/requirements.json")
      .toPromise()
      .then((res) => <Req[]>res.requirements)
      .then((data) => {
        return data;
      });
  }

  getIdRandom(){
    return Math.floor(Math.random() * 300);
  }
}
