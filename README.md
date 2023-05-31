# cypress-cucumber-example
This repository provides an example of using Cypress with Cucumber to check GitHub Actions and Cypress Dashboard for parallel execution. By leveraging the power of Cypress and Cucumber, you can achieve efficient and comprehensive testing for your web applications.

# Prerequisites
To use this example, you need to have the following installed:
* Node.js
* npm (Node Package Manager)

# Getting Started
Follow the steps below to get started with this example:
1. Clone this repository to your local machine:
```
git clone https://github.com/your-username/cypress-cucumber-example.git
```
2. Navigate to the cloned directory:
```
cd cypress-cucumber-example
```
3. Install the required dependencies:
```
npm install
```
4. Configure your GitHub Actions and Cypress Dashboard settings:
* GitHub Actions: Open the `.github/workflows/cypress.yml` file and customize it according to your needs. You can specify different browsers, test files, and other configurations.
* Cypress Dashboard: If you haven't already, sign up for a Cypress Dashboard account (https://dashboard.cypress.io/) and obtain your record key. Then, record the key under your github secrets

5. (Optional) If you want to run the tests in parallel on GitHub Actions and see the results on Cypress Dashboard:
* Push the changes to your GitHub repository.
* Navigate to the "Actions" tab on your repository page and monitor the test runs.
* Access your Cypress Dashboard to view detailed reports and insights.

# Additional Resources
Cypress Documentation: https://docs.cypress.io/
Cucumber Documentation: https://cucumber.io/docs/
Cypress Dashboard: https://dashboard.cypress.io/

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or create an issue in the repository.

# License
This project is licensed under the MIT License.
