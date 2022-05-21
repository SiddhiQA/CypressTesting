import 'cypress-file-upload';
import 'cypress-wait-until';
Cypress.Commands.add("login", (Username, Password) => {
    cy.visit("https://qa-erp.brandscope.com.au/users/sign_in")
    cy.get('#user_username').type(Username)
    cy.get('#user_password').type(Password)
    cy.get('.btn').click()
})
Cypress.Commands.add("logout", () => {
    cy.get('#profileModalLink').click({ force: true })
    cy.get('.list-unstyled > :nth-child(3) > .profile_links > span').click()
})
Cypress.Commands.add("dls_import_details", (Brand_Name, Release_Name, Format) => {
    cy.get(':nth-child(4) > .navtext > .with_arrow > span').click({ force: true })
    cy.get('a[href="/product_uploads"]').click({ force: true })
    cy.get('.icon-plus').click({ force: true })
    // brand selection:
    cy.wait(6000)
    cy.get('#product_upload_brand').select(Brand_Name).should('have.value', '255')
    // release selection
    cy.get('select#product_upload_release').select(Release_Name).should('have.value', '2297')
    //format selection
    cy.get('#product_upload_format').select(Format).should('have.value', 'supplier')

})
Cypress.Commands.add("dls_Valid_File_import", (Upload_file) => {
    //attach file
    cy.get('#product_upload_file').attachFile(Upload_file)
    //verify file
    cy.get('#productUploadValidate').click()
    //upload file
    cy.get('#productUploadBtn').click({ force: true })
    //Handling alert
    cy.get(':nth-child(1) > .notyf__wrapper > .notyf__message').should('be.visible')
    cy.get(':nth-child(2) > .notyf__wrapper > .notyf__message').should('be.visible')
    //Verify status
    // cy.log(cy.get('.ag-overlay-loading-center').should('be.visible')) 
    // cy.waitUntil(() => cy.get('.ag-overlay-loading-center').should('not.be.visible'))
    cy.wait(8000)
    cy.get('.ag-body-horizontal-scroll-viewport').scrollTo("topRight")
    cy.wait(6000)
    cy.get('.ag-row-first > [aria-colindex="7"]').should('be.visible')
    // cy.get('div[row-index="0"]:nth-child(1) > div:nth-child(7)').should('have.text',"Success")
    cy.get('.ag-row-first > [aria-colindex="7"]').should('have.text', "Success")
})
Cypress.Commands.add("dls_Invalid_File_import", (Upload_file) => {
    //attach file
    cy.get('#product_upload_file').attachFile(Upload_file)
    //verify file
    cy.get('#productUploadValidate').click()
    //upload file
    cy.get('#productUploadBtn').click({ force: true })
    cy.get(':nth-child(1) > .notyf__wrapper > .notyf__message').should('be.visible').should('have.text', 'File contains invalid data. Please correct the errors.')
    cy.get(':nth-child(2) > .notyf__wrapper > .notyf__message').should('be.visible').should('have.text', 'no implicit conversion of nil into String')
})
Cypress.Commands.add('ats_Details', (Brand_Name) => {
    cy.get(':nth-child(4) > .navtext > .with_arrow > span').click({ force: true }).click()
    cy.get('a[href="/events/ats"]').eq(0).click({ force: true })
    cy.get('.icon-plus').click();
    // brand selection:
    cy.get('#audit_brand').select(Brand_Name)

})
Cypress.Commands.add('ats_Valid_File_Import', (Upload_Valid_ATS_file) => {
    //attach file
    cy.get('#audit_file_location').attachFile(Upload_Valid_ATS_file)
    //upload file
    cy.get('.justify-content-end > .btn-primary').click({ force: true })
    cy.get('.notyf__message').should('have.text', '\n\n\n\nAts is being imported, an email will be sent to you once the import is complete.\n\n\n\n\n\n\n\n')
    cy.get('.ag-row-first > [aria-colindex="4"]').should('have.text', 'Imported')

})
Cypress.Commands.add('ats_Invalid_File_Import', (Upload_Invalid_ATS_file) => {
    //attach file
    cy.get('#audit_file_location').attachFile(Upload_Invalid_ATS_file)
    //upload file
    cy.get('.justify-content-end > .btn-primary').click({ force: true })
    cy.get('.notyf__message').should('have.text', '\n\n\n\nAts is being imported, an email will be sent to you once the import is complete.\n\n\n\n\n\n\n\n')
    cy.get('.ag-row-first > [aria-colindex="4"]').should('have.text', 'Failed')

})
Cypress.Commands.add('create_BuyPlan', () => {
    cy.get(':nth-child(3) > .navtext > .with_arrow > span').click();
    cy.get("a[data-id='255']").click({ force: true });
    cy.get('#inseasonReleases > .release-links > :nth-child(1) > .card-link > .d-inline-block > .release-name').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > section:nth-child(2) > div:nth-child(2) > button:nth-child(2)').click({force:true})
    cy.get('div:nth-child(3) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) img:nth-child(1)').click({force:true})
    cy.get('[data-product-id="171940"][data-release-id="2297"] > .buyplan > .actions > .sc-eqIVtm > .item-quantity > span > a > .cart-icon').click({force:true})
    cy.get(':nth-child(4) > :nth-child(3) > div > .sc-jTzLTM').type('20')
    cy.get(':nth-child(5) > :nth-child(4) > div > .sc-jTzLTM').type('10')
    cy.get('.h4 > .close > span').click({force:true})
    cy.get('div[class="sc-jAaTju dKpxlZ banner-caption"] a').click()
})
Cypress.Commands.add('edit_buyplan', () =>{
    cy.get('.ag-row > [aria-colindex="2"]').should('be.visible').click()
    cy.log('select existing buyplan')
    cy.get('.btn.btn-sm.btn-secondary.btn-icon').should('have.attr','target')
    cy.get('.icon-edit').click({ force: true })
    cy.url().should('include', 'buyplan_detail')
    cy.get(':nth-child(6) > :nth-child(5) > div > .sc-jTzLTM').type('10')
   // cy.get('.sc-jWBwVP.giYJan.btn.btn-success').click()
})
Cypress.Commands.add('submit_order_Button', () =>{

    cy.get('.sc-jWBwVP.giYJan.btn.btn-success').click()

})
Cypress.Commands.add('submit_order', () =>{
    cy.log('Click on submit Order')
  //  cy.get('.sc-jWBwVP').click()
    cy.get('.modal-footer > .btn-primary').click()
})

Cypress.Commands.add('order_details', () =>
{
    //radio button
    cy.get('input[type="radio"]').should('be.checked')
    cy.get('.sc-gPEVay.kfibxa').should('have.text','Shipping Address (default)')
    //ID
    cy.get('input#order_number').should('have.attr','disabled')
    //Retailer
    cy.get('#retailer_id').should('have.value','BrandFactoryRetailer')
    //Purchase order
    cy.get('#customer_purchase_order').type('1234')
    //Delivery instruction
    cy.get('#delivery_instructions').type('Handle with care')
    //Order total
    cy.get('.modal-body > .sc-jDwBTQ > .total-price-wrapper > label').should('be.visible')
   // cy.get('.modal-body > .sc-jDwBTQ > .total-price-wrapper > label').should('contain.value',total)
    //number of items
    cy.get('.modal-body > .sc-jDwBTQ > .total-items-count-wrapper > label').should('be.visible')
   // cy.get('.modal-body > .sc-jDwBTQ > .total-items-count-wrapper > span').should('contain.value',items)
    //original total
    cy.get(':nth-child(1) > .invoice-header').should('be.visible')
    //cy.get('.float-right > tbody > :nth-child(1) > :nth-child(2)').should('contain.value',originaltotal)
    //order discount
    cy.get(':nth-child(2) > .invoice-header').should('be.visible')
    //cy.get('.float-right > tbody > :nth-child(2) > :nth-child(2)').should('contain.value',discountprice)
    //total
    cy.get(':nth-child(3) > .invoice-header').should('be.visible')
    //cy.get('.float-right > tbody > :nth-child(3) > :nth-child(2)').should('contain.value','total')
    //submit button before TC check
  //  cy.get('.modal-footer > .btn-primary').should('have.attr','disabled')
    //Tearms and conditions
    cy.get('.modal-footer > .d-flex > .sc-gzVnrw > .custom-control-label > .undefined').click()
    //submit button after TC check 
})
Cypress.Commands.add('report_page', () =>
{
    //Select Report tab 
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('.sc-hqyNC > :nth-child(1)').should('be.visible')
    let str = ''
    cy.get('.sc-frDJqD.jIzkzc')
      .then(total => {
        str = total
          .text()
          .split(' ')
          .pop()
        cy.get('.sc-frDJqD.jIzkzc')
          .should('contain', str)
        cy.log(str)
    // var newtotal=total1.substring()
    /*var total2=total1.split('&nbsp;',)
    cy.log(typeof(total2))
    var str1=total1[0]
    var str2=total1[1]
    cy.log(str1)
    cy.log(str2)*/
//     cy.log(typeof(total2))
//     var beforedisc=total2[0];
//     cy.log(beforedisc)
//     var afterdisc=total2[1];
//     cy.log(afterdisc)
 })
   
})