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
/*it('Verify user should be able to import valid DLS file', function(){
  cy.Admin_login(this.data.Username,this.data.Password)
  cy.DLS_import_details(this.data1.Brand_Name,this.data1.Release_Name,this.data1.Format)
  cy.DLS_Valid_File_import(this.data1.Upload_Valid_file)  
 // cy.Admin_logout()
})*/
it('verify user should not be able to import invalid DLS file', function(){
  cy.Admin_login(this.data.Username, this.data.Password)
  cy.DLS_import_details(this.data1.Brand_Name,this.data1.Release_Name,this.data1.Format)
  cy.DLS_Invalid_File_import(this.data1.Upload_Invalid_file)
 // cy.Admin_logout()
})
})

