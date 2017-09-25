const app = require("./src/app");
const seeders = require("./src/seeders");

// Set up our seeders
app.configure(seeders);

app
  .seed()
  .then(result => console.log("Seeding db completed. ") || process.exit(0));
