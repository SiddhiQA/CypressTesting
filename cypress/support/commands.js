import 'cypress-file-upload';
import 'cypress-wait-until';
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
Cypress.Commands.add("Admin_logout",() =>{
    cy.get('#profileModalLink').click({force:true})
    cy.get('.list-unstyled > :nth-child(3) > .profile_links > span').click()
})
Cypress.Commands.add("DLS_import_details", (Brand_Name,Release_Name,Format) =>{
        cy.get(':nth-child(4) > .navtext > .with_arrow > span').click({force:true})
        cy.get('a[href="/product_uploads"]').click({force:true})
        cy.get('.icon-plus').click({force:true})     
        // brand selection:
        cy.wait(5000)
        cy.get('#product_upload_brand').select(Brand_Name).should('have.value','255') 
        // release selection
        cy.get('select#product_upload_release').select(Release_Name).should('have.value', '2297')
        //format selection
        cy.get('#product_upload_format').select(Format).should('have.value','supplier')
        
})
Cypress.Commands.add("DLS_Valid_File_import", (Upload_file) =>{
        //attach file
        cy.get('#product_upload_file').attachFile(Upload_file)
        //verify file
        cy.get('#productUploadValidate').click()
        //upload file
        cy.get('#productUploadBtn').click({force:true})    
        //Handling alert
        cy.get(':nth-child(1) > .notyf__wrapper > .notyf__message').should('be.visible')
        cy.get(':nth-child(2) > .notyf__wrapper > .notyf__message').should('be.visible')
        //Verify status
       // cy.log(cy.get('.ag-overlay-loading-center').should('be.visible')) 
       // cy.waitUntil(() => cy.get('.ag-overlay-loading-center').should('not.be.visible'))
        cy.wait(8000)
        cy.get('.ag-body-horizontal-scroll-viewport').scrollTo("topRight")
        cy.get('.ag-row-first > [aria-colindex="7"]').should('be.visible')
       // cy.get('div[row-index="0"]:nth-child(1) > div:nth-child(7)').should('have.text',"Success")
        cy.get('.ag-row-first > [aria-colindex="7"]').should('have.text',"Success")
    })
Cypress.Commands.add("DLS_Invalid_File_import", (Upload_file) =>{
        //attach file
        cy.get('#product_upload_file').attachFile(Upload_file)
        //verify file
        cy.get('#productUploadValidate').click()
        //upload file
        cy.get('#productUploadBtn').click({force:true})    
        cy.get(':nth-child(1) > .notyf__wrapper > .notyf__message').should('be.visible').should('have.text','File contains invalid data. Please correct the errors.')
        cy.get(':nth-child(2) > .notyf__wrapper > .notyf__message').should('be.visible').should('have.text','no implicit conversion of nil into String')
    })
Cypress.Commands.add('ATS_Details', (Brand_Name)=>{
        cy.get(':nth-child(4) > .navtext > .with_arrow > span').click({force:true}).click()
        cy.get('a[href="/events/ats"]').eq(0).click({force:true})
        cy.get('.icon-plus').click();
        // brand selection:
        cy.get('#audit_brand').select(Brand_Name) 
       
})
Cypress.Commands.add('ATS_Valid_File_Import', (Upload_Valid_ATS_file)=>{
        //attach file
        cy.get('#audit_file_location').attachFile(Upload_Valid_ATS_file)
        //upload file
        cy.get('.justify-content-end > .btn-primary').click({force:true}) 
        cy.get('.notyf__message').should('have.text','\n\n\n\nAts is being imported, an email will be sent to you once the import is complete.\n\n\n\n\n\n\n\n')
        cy.get('.ag-row-first > [aria-colindex="4"]').should('have.text','Imported')

    })
Cypress.Commands.add('ATS_Invalid_File_Import', (Upload_Invalid_ATS_file)=>{
        //attach file
        cy.get('#audit_file_location').attachFile(Upload_Invalid_ATS_file)
        //upload file
        cy.get('.justify-content-end > .btn-primary').click({force:true})
        cy.get('.notyf__message').should('have.text','\n\n\n\nAts is being imported, an email will be sent to you once the import is complete.\n\n\n\n\n\n\n\n')
        cy.get('.ag-row-first > [aria-colindex="4"]').should('have.text','Failed')

    })
Cypress.Commands.add('Create_BuyPlan', ()=>{
    cy.get(':nth-child(3) > .navtext > .with_arrow > span').click();
    cy.get("a[data-id='255']").click({force: true});
    cy.get('#inseasonReleases > .release-links > :nth-child(1) > .card-link > .d-inline-block > .release-name').click()
   // cy.get('body > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > section:nth-child(2) > div:nth-child(2) > button:nth-child(2)').click()
    cy.get('div:nth-child(3) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) img:nth-child(1)').click()
    cy.get('[data-product-id="171940"][data-release-id="2297"] > .buyplan > .actions > .sc-eqIVtm > .item-quantity > span > a > .cart-icon').click()
    cy.get(':nth-child(4) > :nth-child(3) > div > .sc-jTzLTM').type('20')
    cy.get(':nth-child(5) > :nth-child(4) > div > .sc-jTzLTM').type('10')
    cy.get('.h4 > .close > span').click()
    cy.get('div[class="sc-jAaTju dKpxlZ banner-caption"] a').click()   
    })
