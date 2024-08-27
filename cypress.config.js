// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    
  },

  env: 
  {
    URL: 'https://magento.softwaretestingboard.com/customer/account/create/'
  },

  defaultCommandTimeout: 15000, // Set to 20 seconds (10000 milliseconds)

  retries: 
  {
  runMode : 2
  }

});




