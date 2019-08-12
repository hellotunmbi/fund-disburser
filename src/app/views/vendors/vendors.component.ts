import { Component, OnInit } from "@angular/core";
import { VendorService } from "../../services/vendor.service";

@Component({
  selector: "app-vendors",
  templateUrl: "./vendors.component.html",
  styleUrls: ["./vendors.component.scss"]
})
export class VendorsComponent implements OnInit {
  vendors: Array<{}> = [];

  constructor(private vendorService: VendorService) {}

  ngOnInit() {
    this.fetchVendors();
  }

  fetchVendors() {
    this.vendorService.listVendors().subscribe(data => {
      console.log(data);

      if (data["status"] === 200) {
        this.vendors = data["data"];
      }
    });
  }

  paymentDone($event) {
    console.log("DONE");
    const response = $event;

    if (response.status === "success") {
      //prompt paid. Send paid status to API to be recorded
      console.log($event);

      //verify transaction
      //   this.vendorService.verifyTransaction(response.reference)
    } else {
      console.log("UNABLE TO COMPLETE");
    }
  }

  paymentCancel() {
    console.log("Payment Cancelled");
  }

  generateRef() {
    const randomRef = Math.floor(Math.random() * Math.floor(100000000));
    return randomRef;
  }
}
