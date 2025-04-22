const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register Allure reporter
      allureCypress(on, config);
    },
    // Example config
   
  },
});
