const { users, votes, boxes, cities } = require('./data');

module.exports = {
  getPeople: async () => Promise.resolve(users),
  getPerson: async (id) => users.find((el) => el.id === id),
};
