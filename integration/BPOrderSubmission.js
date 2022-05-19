///<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })
describe('BP Order Submission', ()=>{
before(function(){
  cy.fixture('Retailerlogin').then(function (data) {
        this.data = data;
      })
})

it('verify user should be able to submit order through existing Buy Plan', function()
{
  cy.Retailer_login(this.data.Username,this.data.Password)
  cy.Create_BuyPlan()
  cy.wait(5000)
  cy.get('.ag-row > [aria-colindex="2"]').click()
  cy.wait(5000)
  cy.get('.icon-edit').click({force:true})
  //cy.title().should('be.equal','Brandscope')
 
  cy.get('.sc-jWBwVP').click()
  cy.get('.modal-footer > .d-flex > .sc-gzVnrw > .custom-control-label > .undefined').click()
  cy.get('.modal-footer > .btn-primary').click()
  cy.url().should('include','https://qa-erp.brandscope.com.au/orders')
})


})