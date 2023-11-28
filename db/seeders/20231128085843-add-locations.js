'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = new Array(3).fill(null);
    await queryInterface.bulkInsert(
      'Locations',
      arr.map((el) => ({
        title: faker.word.words(1),
        address: faker.word.words(5),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
