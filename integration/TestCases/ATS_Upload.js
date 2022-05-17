///<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })
describe('Upload File', ()=>{
  before(function () {
    cy.fixture('Adminlogin').then(function (data) {
      this.data = data;
    })
  })

it('Verify ATS Upload', function(){
  cy.Admin_login(this.data.Username,this.data.Password)
})
})