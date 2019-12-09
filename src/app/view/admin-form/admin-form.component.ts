import { Component, OnInit } from "@angular/core";
import { CheckHeaderFooterService } from "src/app/services/check-header-footer.service";
import { AdmainSerivesService } from "src/app/services/admain-serives.service";

@Component({
  selector: "app-admin-form",
  templateUrl: "./admin-form.component.html",
  styleUrls: ["./admin-form.component.css"]
})
export class AdminFormComponent implements OnInit {
  constructor(
    private _CheckHeaderFooterService: CheckHeaderFooterService,
    private _AdmainSerivesService: AdmainSerivesService
  ) {}

  ngOnInit() {
    this._CheckHeaderFooterService.hideen();
  }
  form(obj) {
    this._AdmainSerivesService.addproduct(obj).subscribe(res=>{},error=>{console.log(error),()=>{console.log("done")}});
  }
}
