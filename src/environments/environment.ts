// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //   appBaseURL: "https://fund-disburser-api.herokuapp.com/",
  appBaseURL: "http://localhost:1000/",
  paystackAPI: "https://api.paystack.co",
  PAYSTACK_SECRET_KEY_TEST: "sk_test_60ba36b41d9a65fb44b3ea43b30a323440f960b6",
  PAYSTACK_PUBLIC_KEY_TEST: "pk_test_e90f321d81004cd2a0f56dbdafa493f53a029e0c"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
