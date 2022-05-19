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

  it('Verify user should be able to import valid ATS', function () {
    
    cy.ats_Details(data1.Brand_Name)
    cy.ats_Valid_File_Import(data1.Upload_Valid_ATS_file)
    cy.wait(6000)
  })
  it('Verify user should not be able to import invalid ATS', function () {
    // cy.Admin_login(data.Username, data.Password)
    cy.wait(6000)
    cy.ats_Details(data1.Brand_Name)
    cy.ats_Invalid_File_Import(data1.Upload_Invalid_ATS_file)
    // cy.Admin_logout()
  })
})