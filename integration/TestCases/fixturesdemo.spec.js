/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })
describe('MyTestSuite',() =>{

before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    })
  })

it('verify user can login', function()
{
    cy.login(this.data.Username,this.data.Password)
})

})

it('verify user can read JSON file', function(){
  cy.readFile('/home/josh/Cypress-testing/cypress/fixtures/example.json').its('Username').should('eq', 'brandfactoryuser') // true


})
