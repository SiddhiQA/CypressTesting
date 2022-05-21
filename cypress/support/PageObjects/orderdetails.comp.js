export class OrderDetailsComponent {
    routes() {
        cy.intercept('GET', '/api/buyplans/*/submit_order.json').as('getorderdetails')
        cy.intercept('POST', '/api/buyplans/*/submit_order.json').as('createorder')
    }
  



}