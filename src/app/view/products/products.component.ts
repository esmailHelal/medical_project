import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  condition = true;
  constructor() {}

  ngOnInit() {}
  onclick() {
    this.condition = true;
  }
  onclick1() {
    this.condition = false;
  }
}
