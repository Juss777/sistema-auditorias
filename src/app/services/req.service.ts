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
}
