const { defineConfig } = require("cypress");
const cucumber = require('cypress10-cucumber-preprocessor').default;


async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber());

  if (config.env.TAGS) {
    config.env.TAGS = config.env.TAGS.split('_').join(' ');
    console.log(`TAGS: ${config.env.TAGS}`);
  }

  return config;
}

module.exports = defineConfig({
  projectId: "jd8dd7",
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.feature'
    }
  });
