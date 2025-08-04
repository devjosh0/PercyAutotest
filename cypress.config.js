// const { defineConfig } = require("cypress");
// const { allureCypress } = require("allure-cypress/reporter");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Register Allure reporter
//             allureCypress(on, {
//         resultsDir: "./allure-results",
//         links: [
//           { type: "issue", urlTemplate: "https://issues.example.com/%s" },
//           { type: "tms", urlTemplate: "https://tms.example.com/%s" },
//         ],
//       });
//     },
//   },
// });

const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
