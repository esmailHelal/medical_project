import { Component, OnInit } from "@angular/core";
import { CheckHeaderFooterService } from "src/app/services/check-header-footer.service";
import { AdmainSerivesService } from "src/app/services/admain-serives.service";
@Component({
  selector: "app-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.css"]
})
export class LoginformComponent implements OnInit {
  constructor(
    private _CheckHeaderFooterService: CheckHeaderFooterService,
    private _AdmainSerivesService: AdmainSerivesService
  ) {}

  ngOnInit() {
    this._CheckHeaderFooterService.hideen();
  }

  form(obj) {
    this._AdmainSerivesService.checkLoginandRegister(obj);
  }
}
