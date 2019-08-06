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

      this.vendors = data["data"];
    });
  }
}
