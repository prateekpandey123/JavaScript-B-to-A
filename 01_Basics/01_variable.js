const accountID = "12345";
let email = "prateekpandey@gmail.com";
var password = "12345";
city = "varanasi";
let state;

email = "qw@gmail.com";
password = "232323";
city = "patna";

/*
  var is not be used 
  beacuse of issue in block scope and functional scope 
*/

// accountID = 2; // not allowed
console.log(accountID);

console.table([accountID, email, password, city, state]);
