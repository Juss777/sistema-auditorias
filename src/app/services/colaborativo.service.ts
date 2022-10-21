import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Colaborativo } from "../interface/colaborativo";

@Injectable({
  providedIn: "root",
})
export class ColaborativoService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http
      .get<any>("assets/colaborativo.json")
      .toPromise()
      .then((res) => <Colaborativo[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
