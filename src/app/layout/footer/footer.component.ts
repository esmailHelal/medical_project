import { Component, OnInit } from "@angular/core";
import { CheckHeaderFooterService } from "src/app/services/check-header-footer.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor(private _CheckHeaderFooterService: CheckHeaderFooterService) {}

  ngOnInit() {}
}
