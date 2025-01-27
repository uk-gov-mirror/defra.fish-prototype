/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  "fullName": "Sam Baiter",
  "licenceType": "Trout and course",
  "rods": "2",
  "licenceLength": "12 month",
  "address1": "15 Ward Road",
  "address2": "",
  "city": "Bath",
  "postcode": "BA1 5EH",
  "notificationPreference": "Email",
  "emailAddress": "sam.baiter59@gmail.com",
  "endDay": "10",
  "endMonth": "April",
  "endYear": "2020",
  "startDay": "11",
  "startMonth": "April",
  "startYear": "2020",
  "startDate": "11 April 2020",
  "concession": "true"
  // Insert values here
}
