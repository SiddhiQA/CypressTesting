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
  before(function () {
    cy.fixture('DLS Import').then(function (data1) {
      this.data1 = data1;
    })
  })
/*it('Verify user should be able to import valid ATS', function(){
  cy.Admin_login(this.data.Username,this.data.Password)
  cy.ATS_Details(this.data1.Brand_Name)
  cy.ATS_Valid_File_Import(this.data1.Upload_Valid_ATS_file)
})*/
it('Verify user should not be able to import invalid ATS', function(){
  cy.Admin_login(this.data.Username,this.data.Password)
  cy.ATS_Details(this.data1.Brand_Name)
  cy.ATS_Invalid_File_Import(this.data1.Upload_Invalid_ATS_file)
})
})