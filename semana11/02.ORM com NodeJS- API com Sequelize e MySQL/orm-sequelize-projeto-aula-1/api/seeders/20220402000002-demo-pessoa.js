"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          name: "John Doe",
          isBetaMember: false,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Pessoas", null, {});
  },
};
