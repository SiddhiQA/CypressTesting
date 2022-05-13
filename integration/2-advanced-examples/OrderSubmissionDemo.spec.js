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
    cy.get(':nth-child(3) > .navtext > .with_arrow > span').click();
    cy.get("a[data-id='255']").click({force: true});
    cy.get('#inseasonReleases > .release-links > :nth-child(1) > .card-link > .d-inline-block > .release-name').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > section:nth-child(2) > div:nth-child(2) > button:nth-child(2)').click()
    cy.get('div:nth-child(3) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) img:nth-child(1)').click()
    cy.get('[data-product-id="171940"][data-release-id="2297"] > .buyplan > .actions > .sc-eqIVtm > .item-quantity > span > a > .cart-icon').click()
    cy.get(':nth-child(4) > :nth-child(3) > div > .sc-jTzLTM').type('20')
    cy.get(':nth-child(5) > :nth-child(4) > div > .sc-jTzLTM').type('10')
    cy.get('.h4 > .close > span').click()
    cy.get('.sc-jWBwVP').click()
    cy.get('.modal-footer > .d-flex > .sc-gzVnrw > .custom-control-label > .undefined').click()
    cy.get('.modal-footer > .btn-primary').click()


})







  })