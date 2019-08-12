import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fund-account",
  templateUrl: "./fund-account.component.html",
  styleUrls: ["./fund-account.component.scss"]
})
export class FundAccountComponent implements OnInit {
  amount;
  ref;

  paymentResult;

  message = {
    enabled: false,
    text: ""
  };

  constructor() {
    this.ref = Math.floor(Math.random() * 90000000);
  }

  ngOnInit() {}

  paymentCancel() {
    console.log("payment cancelled");
  }

  paymentDone($event) {
    console.log($event);
    this.paymentResult = $event;

    if (this.paymentResult.status === "success") {
      this.message.enabled = true;
      this.message.text = "Fund Successfully Added.";

      this.amount = "";
    }
    console.log("payment doned");
  }
}
