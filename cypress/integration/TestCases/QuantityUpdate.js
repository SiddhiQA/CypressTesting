class QuantityUpdates{

    select_brand_release()
    {
        cy.get(':nth-child(3) > .navtext > .with_arrow > span').click();
        cy.get("a[data-id='255']").click({ force: true });
        cy.get('#inseasonReleases > .release-links > :nth-child(1) > .card-link > .d-inline-block > .release-name').click()
    }
    delete_all()
    {
        cy.get('body > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > section:nth-child(2) > div:nth-child(2) > button:nth-child(2)').click({force:true})
     
    }
    open_quantity_grid()
   {
    cy.get('[data-product-id="171940"][data-release-id="2297"] > .buyplan > .actions > .sc-eqIVtm > .item-quantity > span > a > .cart-icon').click({force:true})
   }
   select_item()
   {
    cy.get('div:nth-child(3) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) img:nth-child(1)').click({force:true})
     
   }
    update_quantity() {
        cy.get(':nth-child(4) > :nth-child(3) > div > .sc-jTzLTM').type('20')
        cy.get(':nth-child(5) > :nth-child(4) > div > .sc-jTzLTM').type('10')
        
    }
    close_button()
    {
        cy.get('.h4 > .close > span').click({force:true})
    }


}