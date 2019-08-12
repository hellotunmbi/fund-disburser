import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  HttpClientModule,
  HttpHeaders,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Angular4PaystackModule } from "angular4-paystack";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./views/test/test.component";
import { HomeComponent } from "./views/home/home.component";
import { NavComponent } from "./common/nav/nav.component";
import { FundAccountComponent } from "./views/fund-account/fund-account.component";
import { AddVendorComponent } from "./views/add-vendor/add-vendor.component";
import { VendorsComponent } from "./views/vendors/vendors.component";
import { ProcessPaymentsComponent } from "./views/process-payments/process-payments.component";

import { VendorService } from "./services/vendor.service";
import TokenInterceptor from "./services/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    NavComponent,
    FundAccountComponent,
    AddVendorComponent,
    VendorsComponent,
    ProcessPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Angular4PaystackModule
  ],
  providers: [
    VendorService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
