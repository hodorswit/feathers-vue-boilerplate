const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const axios = require('axios');

const restClient = rest('/api');
const client = feathers();
client.configure(restClient.axios(axios));

export default client;
