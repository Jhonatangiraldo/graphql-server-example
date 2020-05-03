const api = require('../db/api');

const getPerson =  ({ id }) => api.getPerson(id);

const getPeople = () => api.getPeople();

module.exports = { getPerson, getPeople };

