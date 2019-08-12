import { Component, OnInit } from "@angular/core";
import { VendorService } from "../../services/vendor.service";

@Component({
  selector: "app-add-vendor",
  templateUrl: "./add-vendor.component.html",
  styleUrls: ["./add-vendor.component.scss"]
})
export class AddVendorComponent implements OnInit {
  banksList: Array<{}> = [];

  vendor = {
    customer_name: "",
    business_name: "",
    acct_name: "",
    acct_no: "",
    bank: "",
    amount: ""
  };

  submitBtn = {
    text: "Add Vendor",
    enabled: true
  };

  message = {
    text: "",
    enabled: false
  };

  errorMessage = {
    text: "",
    enabled: false
  };

  constructor(private vendorService: VendorService) {
    this.getBankList();
  }

  ngOnInit() {}

  getBankList() {
    this.vendorService.getBanks().subscribe(banks => {
      if (banks["status"]) {
        this.banksList = banks["data"];
      } else {
        console.log("Unable to get Banks");
      }
    });
  }

  addVendor() {
    console.log("You clicked me yeah?");
    console.log(this.vendor);

    this.vendor["type"] = "nuban";

    //check if fields are empty.
    if (
      !this.vendor.customer_name &&
      !this.vendor.business_name &&
      !this.vendor.acct_name &&
      !this.vendor.acct_no &&
      !this.vendor.bank &&
      !this.vendor.amount
    ) {
      alert("Some fields are empty");
    } else {
      this.submitBtn.enabled = false;
      this.submitBtn.text = "Adding Vendor...";

      const vendorBody = {
        type: "nuban",
        name: this.vendor.customer_name,
        account_number: this.vendor.acct_no,
        bank_code: this.vendor.bank,
        metadata: {
          business_name: this.vendor.business_name,
          amount: parseInt(this.vendor.amount)
        }
      };

      try {
        this.vendorService.addVendor(vendorBody).subscribe(
          data => {
            console.log(data);

            this.submitBtn.enabled = true;
            this.submitBtn.text = "Add Vendor";

            this.message.enabled = true;
            this.message.text = data["message"];

            this.clearFields();
          },
          error => {
            console.log(error["error"].message);
            this.errorMessage.text = error["error"].message;
            this.errorMessage.enabled = true;
          }
        );
      } catch (err) {
        console.log("error: " + err);
      }
    }
  }

  clearFields() {
    this.vendor.customer_name = "";
    this.vendor.business_name = "";
    this.vendor.acct_name = "";
    this.vendor.acct_no = "";
    this.vendor.bank = "";
    this.vendor.amount = "";
  }
}
