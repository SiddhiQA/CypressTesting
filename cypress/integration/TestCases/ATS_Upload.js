///<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})
describe('Upload File', () => {
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
    cy.Admin_login(data.Username, data.Password)
  })

  afterEach("",()=>{
    cy.Admin_logout()
  })

  it('Verify user should be able to import valid ATS', function () {
    
    cy.ATS_Details(data1.Brand_Name)
    cy.ATS_Valid_File_Import(data1.Upload_Valid_ATS_file)
    cy.wait(6000)
  })
  it('Verify user should not be able to import invalid ATS', function () {
    // cy.Admin_login(data.Username, data.Password)
    cy.wait(6000)
    cy.ATS_Details(data1.Brand_Name)
    cy.ATS_Invalid_File_Import(data1.Upload_Invalid_ATS_file)
    // cy.Admin_logout()
  })
})