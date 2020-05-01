const users = [
  { id: 1, name: 'Juan' },
  { id: 2, name: 'Pedro' },
  { id: 3, name: 'Santi' },
];

const votes = [
  { id: 1, userId: 1, boxId: 1 },
  { id: 2, userId: 2, boxId: 2 },
  { id: 3, userId: 3, boxId: 3 },
];

const boxes = [
  { id: 1, name: 'Main box', cityId: 1 },
  { id: 2, name: 'Left box', cityId: 1 },
  { id: 3, name: 'Right box', cityId: 1 },
  { id: 4, name: 'Main box', cityId: 2 },
  { id: 5, name: 'Left box', cityId: 2 },
  { id: 6, name: 'Right box', cityId: 4 },
];

const cities = [
  { id: 1, name: 'Manizales' },
  { id: 2, name: 'Chinchina' },
  { id: 3, name: 'Palestina' },
];

module.exports = {
  users,
  votes,
  boxes,
  cities,
};
