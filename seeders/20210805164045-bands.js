'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentYear = new Date().getFullYear();
    await queryInterface.bulkInsert('bands', [{
      name: 'The Useful Books',
      genre: 'Rock',
      available_start_time: `${currentYear}-01-01 11:00:00`,  // Adjusted timestamp
      end_time: `${currentYear}-01-01 23:00:00`  // Adjusted timestamp
    }])
  },
  
  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('bands', null, {})
  }
}
