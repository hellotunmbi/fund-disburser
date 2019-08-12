import { Component, OnInit } from "@angular/core";
import { VendorService } from "../../services/vendor.service";

@Component({
  selector: "app-add-vendor",
  templateUrl: "./add-vendor.component.html",
  styleUrls: ["./add-vendor.component.scss"]
})
export class AddVendorComponent implements OnInit {
  vendor = {
    customer_name: "",
    business_name: "",
    amount: "",
    acct_name: "",
    acct_no: "",
    bank: ""
  };

  submitBtn = {
    text: "Add Vendor",
    enabled: false
  };

  message = {
    text: "",
    enabled: false
  };

  constructor(private vendorService: VendorService) {}

  ngOnInit() {}

  addVendor() {
    console.log("You clicked me yeah?");
    console.log(this.vendor);

    //check if fields are empty.
    if (
      !this.vendor.customer_name &&
      !this.vendor.business_name &&
      !this.vendor.amount &&
      !this.vendor.acct_name &&
      !this.vendor.acct_no &&
      !this.vendor.bank
    ) {
      alert("Some fields are empty");
    } else {
      this.submitBtn.enabled = true;
      this.submitBtn.text = "Adding Vendor...";

      this.vendorService.createVendor(this.vendor).subscribe(data => {
        if (data["status"] === 200) {
          console.log(data);

          this.message.enabled = true;
          this.message.text = data["data"].message;

          console.log(data["data"].message);

          this.submitBtn.enabled = false;
          this.submitBtn.text = "Add Vendor";

          this.vendor.customer_name = "";
          this.vendor.business_name = "";
          this.vendor.amount = "";
          this.vendor.acct_name = "";
          this.vendor.acct_no = "";
          this.vendor.bank = "";
        } else {
          this.message.enabled = false;
          this.message.text = "";
        }
      });
    }
    //If not, disable submit button,
    //submit to vendor service.
    //clear fields
  }
}
