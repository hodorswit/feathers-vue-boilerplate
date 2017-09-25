module.exports = {
  path: "property",
  count: 10,
  template: {
    address1: "{{address.streetAddress}}",
    address2: "{{address.secondaryAddress}}",
    city: "{{address.city}}",
    state: "{{address.state}}",
    zip: "{{address.zipCode}}"
  }
};
