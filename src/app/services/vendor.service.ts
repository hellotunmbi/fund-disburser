import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class VendorService {
  baseURL = environment.appBaseURL;
  paystackAPI = environment.paystackAPI;
  bearertoken = environment.PAYSTACK_SECRET_KEY_TEST;

  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(public http: HttpClient) {}

  /******************* */
  // Create Transfer Recipient...
  addVendor(vendor) {
    return this.http.post(
      `${this.paystackAPI}/transferrecipient`,
      vendor,
      this.options
    );
  }

  /******************* */
  // List All Transfer Recipient...

  listVendors() {
    return this.http.get(`${this.paystackAPI}/transferrecipient`, this.options);
  }

  /******************* */
  // Perform transfer from balance to users bank accounts...
  processBulkTransfer(transferDetails) {
    return this.http.post(
      `${this.paystackAPI}/transfer/bulk`,
      transferDetails,
      this.options
    );
  }

  /******************* */
  // List All Banks...
  getBanks() {
    return this.http.get(`${this.paystackAPI}/bank`);
  }

  /******************* */
  // Check admin's balance...
  checkBalance() {
    return this.http.get(`${this.paystackAPI}/balance`);
  }
}
