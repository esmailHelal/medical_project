import { Component, OnInit } from "@angular/core";
import { CheckHeaderFooterService } from "src/app/services/check-header-footer.service";
import { AdmainSerivesService } from "src/app/services/admain-serives.service";

@Component({
  selector: "app-addarticle",
  templateUrl: "./addarticle.component.html",
  styleUrls: ["./addarticle.component.css"]
})
export class AddarticleComponent implements OnInit {
  constructor(
    private _CheckHeaderFooterService: CheckHeaderFooterService,
    private _AdmainSerivesService: AdmainSerivesService
  ) {}

  ngOnInit() {
    this._CheckHeaderFooterService.hideen();
  }
  form(obj) {
    this._AdmainSerivesService.addarticler(obj).subscribe(
      res => {},
      error => {
        console.log(error),
          () => {
            console.log("done");
          };
      }
    );
  }
}
