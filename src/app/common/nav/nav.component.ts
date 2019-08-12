import { Component, OnInit } from "@angular/core";
import { VendorService } from "../../services/vendor.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  balance = 0;

  constructor(private vendorService: VendorService) {
    this.checkBalance();
  }

  ngOnInit() {}

  checkBalance() {
    this.vendorService.checkBalance().subscribe(
      data => {
        if (data["status"]) {
          this.balance = data["data"][0].balance;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
