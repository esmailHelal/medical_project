import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class AdmainSerivesService {
  token: string;
  constructor(private http: HttpClient, private route: Router) {}
  getToken() {
    let token = localStorage.getItem("token");
    console.log(token);
    return token;
  }
  url = "http://localhost:3000/";
  checkLoginandRegister(data) {
    return this.http
      .post<{ user: any; token: string }>(this.url + "admain/login", data)
      .subscribe(
        response => {
          localStorage.setItem("token", response.token);
        },
        error => {
          console.log("fashale");
          //this.route.navigateByUrl("");
        },
        () => {
          console.log("nag7");
          this.route.navigateByUrl("admain");
        }
      );
  }
  addproduct(data) {
    console.log(data);
    return this.http.post(this.url + "addproduct", data);
  }
  addarticler(data) {
    return this.http.post(this.url + "article", data);
  }
  getproduct() {
    return this.http.get(this.url + "product");
  }
  getarticler() {
    return this.http.get(this.url + "article");
  }
}
