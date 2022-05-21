///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})
import { OrderDetailsComponent } from "../../support/PageObjects/orderdetails.comp"
const orderdetails = new OrderDetailsComponent()
describe('BP Order Submission', () => {
  let data;
  before(function () {
    cy.fixture('Retailerlogin').then(function (fdata) {
      data = fdata;
    })
    orderdetails.routes()
   // orderdetails.order_details()
  })
  beforeEach("", () => {
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
    cy.url().should('include', 'https://qa-erp.brandscope.com.au/buyplans')
    cy.log('On buyplan page')
    cy.edit_buyplan()
    cy.report_page()
    cy.submit_order_Button()
    cy.order_details()
    cy.submit_order()
    cy.wait('@createorder').then((createorder) => {
      expect(createorder.response.statusCode).to.eq(200)
      let response = createorder.response.body.data.order_number
      cy.get('.ag-row-first > [aria-colindex="1"]', { timeout: 60000 }).should('contain.text', response)
    })
    cy.url().should('include', 'https://qa-erp.brandscope.com.au/orders')
  })


})