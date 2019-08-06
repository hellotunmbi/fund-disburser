import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./views/test/test.component";
import { HomeComponent } from "./views/home/home.component";
import { FundAccountComponent } from "./views/fund-account/fund-account.component";
import { AddVendorComponent } from "./views/add-vendor/add-vendor.component";
import { VendorsComponent } from "./views/vendors/vendors.component";
import { ProcessPaymentsComponent } from "./views/process-payments/process-payments.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "fundaccount",
    component: FundAccountComponent
  },
  {
    path: "addvendor",
    component: AddVendorComponent
  },
  {
    path: "vendors",
    component: VendorsComponent
  },
  {
    path: "process-payments",
    component: ProcessPaymentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
