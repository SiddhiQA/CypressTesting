import 'cypress-file-upload';
Cypress.Commands.add("Retailer_login",(Username,Password) => {

    cy.visit("https://qa-erp.brandscope.com.au/users/sign_in")
    cy.get('#user_username').type(Username)
    cy.get('#user_password').type(Password)
    cy.get('.btn').click()

})

Cypress.Commands.add("Admin_login",(Username,Password) => {

    cy.visit("https://qa-erp.brandscope.com.au/users/sign_in")
    cy.get('#user_username').type(Username)
    cy.get('#user_password').type(Password)
    cy.get('.btn').click()

})

Cypress.Commands.add("DLS_import", () =>{
        cy.get(':nth-child(4) > .navtext > .with_arrow > span').click({force:true})
        cy.get('a[href="/product_uploads"]').click({force:true})
        cy.get('.icon-plus').click({force:true})     
        // brand selection:
        cy.get('#product_upload_brand').select("C.O.D.E") 
        // release selection
        cy.get('select#product_upload_release').select("2297").should('have.value', "2297")
        //format selection
        cy.get('#product_upload_format').select('supplier').should('have.value', 'supplier')
        //attach file
        cy.get('#product_upload_file').attachFile("C.O.D.E_DLS.csv")
        //verify file
        cy.get('#productUploadValidate').click()
        //Handling alerts
        cy.on('	window:alert',(str) =>
        {
            expect(str).to.equal('File is valid and ready for upload.')
        })
        //upload file
        cy.get('#productUploadBtn').click({force:true})    
        //Handling alert
        cy.on('	window:alert',(str) =>
        {
            expect(str).to.equal(' Products are being imported, an email will be sent to you once the import is complete.  ')
        })
       
})