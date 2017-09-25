const seeder = require("feathers-seeder");
const fs = require("fs");
const path = require("path");

module.exports = function() {
  const app = this;
  const disabled = app.get("seederDisabled");
  if (disabled) {
    return;
  }

  // get all of the seeder configuration files
  const imports = fs.readdirSync(__dirname).filter(file => file !== "index.js");

  // import them
  const seeders = imports.map(module => {
    return require(`./${module}`);
  });

  const options = {
    disabled: app.get("seederDisabled"),
    services: seeders
  };

  app.configure(seeder(options));

  app.seed();
};
