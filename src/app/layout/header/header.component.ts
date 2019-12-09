import { Component, OnInit } from "@angular/core";
import { CheckHeaderFooterService } from "src/app/services/check-header-footer.service";
declare var $: any;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private _CheckHeaderFooterService: CheckHeaderFooterService) {}

  ngOnInit() {
    $("#languages-block-top").click(function() {
      $("#first-languages").slideToggle();
    });
    $("#user_infoblock-top").click(function() {
      $(".toogle_content").slideToggle();
    });
    $(".icon-search").click(function() {
      $(" .searchmobile .sprsearch-form ").slideToggle();
    });
  }
}
