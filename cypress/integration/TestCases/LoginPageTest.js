///<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

import LoginPage from '../PageObjects/LoginPage'
describe('Page Object Modal Suite',function(){

    before(function () {
        cy.fixture('example').then(function (data) {
          this.data = data;
        })
      })

it('verify if user is able to submit order', function(){

const lp=new LoginPage()
lp.visit()
lp.fillUsername(this.data.Username)
lp.fillPassword(this.data.Password)
lp.click()
cy.title().should('be.equal','Brandscope')
cy.url.should('include','/showroom')
})

})