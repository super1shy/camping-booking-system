const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = new Array(20).fill(null);
    await queryInterface.bulkInsert(
      'Places',
      arr.map((el) => ({
        name: faker.word.words(5),
        overview: faker.lorem.paragraph({ min: 3, max: 7 }),
        capacity: faker.number.int({ min: 1, max: 5 }),
        price: faker.number.int({ min: 80, max: 350 }),
        location_id: faker.number.int({ min: 1, max: 3 }),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Places', null, {});
  },
};
