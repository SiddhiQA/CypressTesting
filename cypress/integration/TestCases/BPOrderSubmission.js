///<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})
describe('BP Order Submission', () => {
  let data;
  before(function () {
    cy.fixture('Retailerlogin').then(function (fdata) {
      data = fdata;
    })
  })
  beforeEach("",()=>{
    cy.login(data.Username, data.Password)
    cy.log('Login')
  })
  // afterEach("",()=>{
  //   cy.logout()
  //   cy.log('Logout')
  // })

  it('verify user should be able to submit order through existing Buy Plan', function () {
    cy.create_BuyPlan()
    cy.log('Buyplan created')
    cy.url().should('include','https://qa-erp.brandscope.com.au/buyplans')
    cy.log('On buyplan page')
    cy.wait(5000)
    cy.get('.ag-row > [aria-colindex="2"]').should('be.visible').click()
    cy.log('select existing buyplan')
    cy.wait(5000)
    cy.get('.icon-edit').should('be.visible').click({ force: true })
    cy.url().should('include','buyplan_detail')
    cy.log('Click on submit Order')
    cy.get('.sc-jWBwVP').click()
    cy.get('.modal-footer > .d-flex > .sc-gzVnrw > .custom-control-label > .undefined').click()
    
    //cy.wait(5000)
    // cy.get('.notyf').then(($selectedElement) => {
    //   // Debugger is hit after the cy.visit
    //   // and cy.get command have completed
    //   debugger
    // })
   // cy.get('.notyf > .notyf__toast--success').should('be.visible')
  //  cy.intercept('GET', '/api/buyplans/*')
  //  cy.intercept('POST', '/api/buyplans/*')
  //  cy.get('.notyf')
   //cy.wait('@dataGetFirst').its('response.statusCode').should('equal', 200)
   cy.intercept('GET', '/api/buyplans/*/submit_order.json').as('GET-wait')
  //  cy.wait('@GET-wait')
  cy.intercept('POST', '/api/buyplans/*/submit_order.json').as('POST-wait')
 
  cy.get('.modal-footer > .btn-primary').click()
 // cy.wait(5000)
 cy.get('@POST-wait')
 cy.get('.notyf').debug()
  //cy.wait(10000)
  // cy.wait('@fetchFruits').its('response.body')
  //   .then((fruits) => {
  //     cy.get('.notyf').should('be.visible')
  //   })
    //cy.url().should('include', 'https://qa-erp.brandscope.com.au/orders')
  })


})