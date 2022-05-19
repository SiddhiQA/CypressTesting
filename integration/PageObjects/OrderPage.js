class OrderPage{   
visit()
{
    cy.visit("https://qa-erp.brandscope.com.au/users/sign_in")
}
brandHover()
{
    const brandName=cy.get(':nth-child(3) > .navtext > .with_arrow > span')
    brandName.click()
}
selectBrand()
{
    const brandName=cy.get("a[data-id='255']")
    brandName.click({force: true});
}
selectRelease()
{
    const release=cy.get('#inseasonReleases > .release-links > :nth-child(1) > .card-link > .d-inline-block > .release-name')
    release.click()
}
deleteAll()
{
    const delelteButton=cy.get('body > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > section:nth-child(2) > div:nth-child(2) > button:nth-child(2)')
    delelteButton.click();
}
clickOnBasketIcon()
{
    
}
selectProduct()
{
    const item=cy.get('body > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > section:nth-child(2) > div:nth-child(2) > button:nth-child(2)')
    const item1=cy.get(':nth-child(4) > :nth-child(3) > div > .sc-jTzLTM')
    item1.clear()
    item1.type('20')
}


}    