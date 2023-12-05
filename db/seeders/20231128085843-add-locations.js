const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = new Array(3).fill(null);
    await queryInterface.bulkInsert(
      'Locations',
      arr.map((el) => ({
        name: faker.word.words(1),
        fullAddress: faker.word.words(8),
        postcode: faker.location.zipCode(),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
