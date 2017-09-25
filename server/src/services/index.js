const messages = require('./messages/messages.service.js');
const property = require('./property/property.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(messages);
  app.configure(property);
};
