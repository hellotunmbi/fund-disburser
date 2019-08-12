import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./../../environments/environment";

@Injectable({ providedIn: "root" })
export default class TokenInterceptor implements HttpInterceptor {
  bearertoken = environment.PAYSTACK_SECRET_KEY_TEST;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.bearertoken}`
      }
    });

    return next.handle(req);
  }
}
