import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AdmainSerivesService } from "src/app/services/admain-serives.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private UserService: AdmainSerivesService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("da5al");
    const AuthToken = this.UserService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + AuthToken)
    });
    return next.handle(authRequest);
  }
}
