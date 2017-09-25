const seeder = require("feathers-seeder");

module.exports = function() {
  const app = this;

  const options = {
    disabled: app.get("seederDisabled"),
    services: [
      {
        path: "property",
        count: 10,
        template: {
          address1: "{{address.streetAddress}}",
          address2: "{{address.secondaryAddress}}",
          city: "{{address.city}}",
          state: "{{address.state}}",
          zip: "{{address.zipCode}}"
        }
      }
    ]
  };

  app.configure(seeder(options));

  app.seed();
};
