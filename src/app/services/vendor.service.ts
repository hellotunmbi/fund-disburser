import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class VendorService {
  baseURL = environment.appBaseURL;
  paystackAPI = environment.paystackAPI;

  constructor(public http: HttpClient) {}

  // CREATE NEW VENDOR...
  createVendor(vendor) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post(this.baseURL + "vendor", vendor, options);
  }

  listVendors() {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.get(this.baseURL + "vendor", options);
  }

  verifyTransaction(ref) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.get(
      this.paystackAPI + "/transaction/verify/" + ref,
      options
    );
  }
}
