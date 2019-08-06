import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./views/test/test.component";
import { HomeComponent } from "./views/home/home.component";
import { NavComponent } from "./common/nav/nav.component";
import { FundAccountComponent } from "./views/fund-account/fund-account.component";
import { CustomersComponent } from "./views/customers/customers.component";
import { AddCustomerComponent } from "./views/add-customer/add-customer.component";
import { AddVendorComponent } from "./views/add-vendor/add-vendor.component";
import { VendorsComponent } from "./views/vendors/vendors.component";
import { ProcessPaymentsComponent } from "./views/process-payments/process-payments.component";

import { VendorService } from "./services/vendor.service";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    NavComponent,
    FundAccountComponent,
    CustomersComponent,
    AddCustomerComponent,
    AddVendorComponent,
    VendorsComponent,
    ProcessPaymentsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [VendorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
