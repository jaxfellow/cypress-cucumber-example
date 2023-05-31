const { defineConfig } = require("cypress");
const cucumber = require('cypress10-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');


async function setupNodeEvents(on, config) {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  };
  on('file:preprocessor', cucumber(options));
  return config;
}

module.exports = defineConfig({
  projectId: "jd8dd7",
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.feature'
    }
  });
