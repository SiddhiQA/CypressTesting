///<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })
  describe('upload File', () => {
    let data;
    let data1;
    before(function () {
      cy.fixture('Adminlogin').then(function (fdata) {
        data = fdata;
      })
      cy.fixture('DLS Import').then(function (fdata1) {
        data1 = fdata1;
      })
    })
  beforeEach("",()=>{
    cy.login(data.Username, data.Password)
  })

  afterEach("",()=>{
    cy.logout()
  })
it('Verify user should be able to import valid DLS file', function(){
  cy.dls_import_details(data1.Brand_Name,data1.Release_Name,data1.Format)
  cy.dls_Valid_File_import(data1.Upload_Valid_file)  
})
it('verify user should not be able to import invalid DLS file', function(){
  cy.dls_import_details(data1.Brand_Name,data1.Release_Name,data1.Format)
  cy.dls_Invalid_File_import(data1.Upload_Invalid_file)
})
})

