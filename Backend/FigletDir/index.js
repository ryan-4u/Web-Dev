const figlet = require('figlet');

figlet("Aaryan is a bad boy", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});