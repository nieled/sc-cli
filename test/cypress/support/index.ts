import './commands';
import './navbar';
import './entity';
import './management';

// https://docs.cypress.io/api/events/catalog-of-events#Uncaught-Exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});