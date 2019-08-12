import { Component, OnInit } from "@angular/core";
import { VendorService } from "../../services/vendor.service";

@Component({
  selector: "app-vendors",
  templateUrl: "./vendors.component.html",
  styleUrls: ["./vendors.component.scss"]
})
export class VendorsComponent implements OnInit {
  vendors: Array<{}> = [];

  vendorLoading = true;
  recipientCodes = [];

  balance = 0;

  message = {
    text: "",
    enabled: false
  };

  errorMessage = {
    text: "",
    enabled: false
  };

  submitBtn = {
    enabled: true,
    text: "Process all payments at once"
  };

  constructor(private vendorService: VendorService) {
    this.checkBalance();
  }

  ngOnInit() {
    this.getVendors();
  }

  generateRef() {
    const randomRef = Math.floor(Math.random() * Math.floor(100000000));
    return randomRef;
  }

  getVendors() {
    this.vendorService.listVendors().subscribe(
      data => {
        if (data["status"]) {
          this.vendors = data["data"];
          this.vendorLoading = false;
        }

        // Get all recipient codes into an array for bulk
        this.recipientCodes = data["data"].map(function(singleVendor) {
          return {
            amount: singleVendor.metadata.amount,
            recipient: singleVendor.recipient_code
          };
        });
      },
      error => {
        console.log(error);
        this.vendorLoading = true;
      }
    );
  }

  processAllPayments() {
    console.log("Processing all payments...");
    this.submitBtn.text = "Please wait...";
    this.submitBtn.enabled = false;

    let totalAmount = this.recipientCodes.reduce(
      (total, recipient) => (total += recipient.amount),
      0
    );

    //If you dont have enough money in your balance...
    if (totalAmount > this.balance) {
      this.errorMessage.text =
        "You dont have enough money to make this transfer<br/>Fund Your Account";
      this.errorMessage.enabled = true;

      return;
    }

    const paymentBody = {
      currency: "NGN",
      source: "balance",
      transfers: this.recipientCodes
    };

    // initialize bulk transfer...
    this.vendorService.processBulkTransfer(paymentBody).subscribe(
      data => {
        if (data["status"]) {
          this.message.enabled = true;
          this.message.text = data["message"];

          this.submitBtn.text = "Process all payments at once";
          this.submitBtn.enabled = true;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  checkBalance() {
    // Check Balance first if owner has enough money
    this.vendorService.checkBalance().subscribe(data => {
      this.balance = data["data"][0].balance;
      console.log(data);
    });

    // setTimeout(() => console.log(this.balance), 2000);
  }

  deleteVendor(recipient_code) {
    console.log("You want to delete a vendor?: " + recipient_code);
  }
}
