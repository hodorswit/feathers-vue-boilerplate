// Initializes the `property` service on path `/property`
const createService = require('feathers-knex');
const createModel = require('../../models/property.model');
const hooks = require('./property.hooks');
const filters = require('./property.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'property',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/property', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('property');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
