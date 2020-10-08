context('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSeNDnHvXY0EqOIyGhbDJuS6h1dM25ZUIsrxu8-7w_hLbskpAA/viewform');
    })
    var i = 0;
    for (i = 0; i < 50 ; i++) { 
    it('Create property Success', () => {
        
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[2]/div[1]/div/div[2]/div/span/div/label[3]/div[2]/div/div').click()
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[2]/div[2]/div/div[2]/div/span/div/div[1]/label/div/div[1]/div').click()
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[2]/div[3]/div/div[2]/div/span/div/div[2]/label/div/div[1]/div').click()
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[2]/div[4]/div/div[2]/div/span/div/div[3]/label/div/div[1]/div/div[3]/div').click()
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[2]/div[5]/div/div[2]/div[1]/div[2]/textarea').type('Produk 500 dapat 2')
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[2]/div[6]/div/div[2]/div[1]/div[2]/textarea').type('Produk 5000 an')
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[2]/div[7]/div/div[2]/div[1]/div[2]/textarea').type('Smirnoff')
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[2]/div[8]/div/div[2]/div[1]/div[2]/textarea').type('Delivery Order dan Paylater')
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[2]/div[9]/div/div[2]/div[1]/div[2]/textarea').type('Sering adakan promo')
        cy.xpath('//*[@id="mG61Hd"]/div/div/div[3]/div[1]/div/div').click()


    
    })
}
})