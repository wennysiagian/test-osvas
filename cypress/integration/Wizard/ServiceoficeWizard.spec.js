context('Login Test', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('base_url'));
        cy.loginLandlord('landlord@landlord.com', 'landlord')

    })

    it('Create service office Success', () => {
        
        cy.contains('a', 'Landlord').click()
        cy.get('select[class="form-control roleselector pr-5"]').select('landlord')
        cy.contains('a', 'My Property').click({ force: true })
        cy.wait(2000)
        cy.get('div[class="btn btn-secondary py-2"]').click()

        //Add Property
       
        cy.contains('select', 'Select One').select('3')
        cy.xpath('//*[@id="page-content"]/div/div[2]/div[2]/div/div[2]/div/form/div[1]/div[1]/div[2]/div/div/div/div/input').type('TCC Batavia')
        cy.get('input[placeholder="Tower"]').type('Tower A')
        cy.get('input[placeholder="Floor"]').type('23')
        cy.get('input[placeholder="Unit"]').type('1204')
        cy.get('textarea[name="property-address"]').type('Jalan pedagang besar 21')
        cy.contains('select', 'Select Country').select('1')
        cy.contains('select', 'Select Province').select('11')
        cy.contains('select', 'Select City').select('175')
        cy.contains('select', 'Select District').select('14690')
        cy.contains('select', 'Select Village').select('226022')
        cy.contains('a', 'Next').click()
        cy.wait(2000)
        
        //Media
        const fileName = 'test.jpg';

        cy.fixture(fileName).then(fileContent => {
            cy.get('input[id="image-property-0"]').upload({fileContent, fileName, mimeType: 'image/jpg'});
        });
        cy.contains('a', 'Next').click()
        cy.wait(2000)

        //Price Info
        cy.get('input[name="security_deposit"]').type('500000')
        cy.get('input[name="minimum_rent"]').type('2')
        cy.get('input[name="listing_price"]').type('3500000')
        cy.get('input[name="yearly_price"]').type('14000000')
        
        cy.wait(2000)
        cy.get('input[id="day-weekday"]').check({ force: true }).should('be.checked')
        cy.get('input[placeholder="08:00 AM"]').eq(0).type('09:00')
        cy.get('input[placeholder="05:00 PM"]').eq(0).type('17:00')
        cy.contains('a', 'Next').click()

        //Info detail
        cy.get('textarea[name="description"]').type('</pre><h3 style="border: 0 solid var(--black);">Facilities</h3><p>Reception, wifi, Ruang Meeting, Secure Room, Coffee, Tea, Water, Call Answering, Wardrobe/Locker, White Board/Glass Board, Domicile Gedung, Daily Cleaning Service, Fax, Business Lounge, CCTV, Parking Area, Printer &amp; Scanner, Stationary, Secretarial Service, Mail Handling Service, Virtual Offices, 24 x 7 Access, Security Staff, IT Support, Access Open Area, Engineering Staff<br></p>')
        cy.contains('select', 'Certificate').select('SHM - Sertifikat Hak Milik')
        cy.get('input[name="building_area"]').type('20')
        cy.contains('select', 'Electrical Power').select('900 Watt')
        cy.contains('select', 'Bathroom').select('1')
        cy.contains('select', 'Grade').select('Ruko')
        cy.get('input[value="Yes"]').click()
        cy.get('input[name="tax_office"]').type('KPP Malang Utara')
        cy.get('input[name="additional_benefit"]').type('free kopi')
        cy.get('input[name="pax"]').type('2')
        cy.contains('select', 'Room Type').select('View')
        cy.get('input[name="floors"]').type('27') 
        cy.fixture(fileName).then(fileContent => {
            cy.get('input[name="property_type_document__3"]').upload({fileContent, fileName, mimeType: 'image/jpg'});
        });
        
        cy.contains('a', 'Next').click()

        //Amenities Facilities
        cy.get('input[id="select-all-amenities"]').check({ force: true })
        
        cy.contains('a', 'Next').click()

        //Advance Setting
        cy.get('input[value="Property Management"]').check({ force: true })
        cy.contains('a', 'Next').click()

        //Summary
        cy.get('input[id="agree"]').check({ force: true })
        cy.contains('a', 'Submit Verification').click()

        //validation
        cy.url().should('include', '/me/properties')
    
    })

    it('Create service office Success Using property master', () => {
    
    cy.contains('a', 'Landlord').click()
        cy.get('select[class="form-control roleselector pr-5"]').select('landlord')
        cy.contains('a', 'My Property').click({ force: true })
        cy.wait(2000)
        cy.get('div[class="btn btn-secondary py-2"]').click()
        //cy.get('button[title="Nested option"]').click()

        //Add Property
       
        cy.contains('select', 'Select One').select('3')
        cy.xpath('//*[@id="page-content"]/div/div[2]/div[2]/div/div[2]/div/form/div[1]/div[1]/div[2]/div/div/div/div/input').type('Bendungan')
        cy.wait(2000)
        cy.xpath('//*[@id="82-suggestions-suggestion-42"]').should('be.visible')
        cy.contains('option', 'Select One').select('[object Object]')
        cy.contains('a', 'Next').click()
        cy.wait(2000)
        
        //Media
        const fileName = 'test.jpg';

        cy.fixture(fileName).then(fileContent => {
            cy.get('input[id="image-property-0"]').upload({fileContent, fileName, mimeType: 'image/jpg'});
        });
        cy.contains('a', 'Next').click()
        cy.wait(2000)

        //Price Info
        cy.get('input[name="security_deposit"]').type('500000')
        cy.get('input[name="minimum_rent"]').type('2')
        cy.get('input[name="listing_price"]').type('3500000')
        cy.get('input[name="yearly_price"]').type('14000000')

        cy.contains('a', 'Next').click()

        //Info detail
        cy.get('textarea[name="description"]').type('</pre><h3 style="border: 0 solid var(--black);">Facilities</h3><p>Reception, wifi, Ruang Meeting, Secure Room, Coffee, Tea, Water, Call Answering, Wardrobe/Locker, White Board/Glass Board, Domicile Gedung, Daily Cleaning Service, Fax, Business Lounge, CCTV, Parking Area, Printer &amp; Scanner, Stationary, Secretarial Service, Mail Handling Service, Virtual Offices, 24 x 7 Access, Security Staff, IT Support, Access Open Area, Engineering Staff<br></p>')
        cy.contains('select', 'Certificate').select('SHM - Sertifikat Hak Milik')
        cy.get('input[name="building_area"]').type('20')
        cy.contains('select', 'Electrical Power').select('900 Watt')
        cy.contains('select', 'Bathroom').select('1')
        cy.contains('select', 'Grade').select('Ruko')
        cy.get('input[value="Yes"]').click()
        cy.get('input[name="tax_office"]').type('KPP Malang Utara')
        cy.get('input[name="additional_benefit"]').type('free kopi')
        cy.get('input[name="pax"]').type('2')
        cy.contains('select', 'Room Type').select('View')
        cy.get('input[name="floors"]').type('27') 
        cy.fixture(fileName).then(fileContent => {
            cy.get('input[name="property_type_document__3"]').upload({fileContent, fileName, mimeType: 'image/jpg'});
        });
        
        cy.contains('a', 'Next').click()
    

        //Amenities Facilities
        cy.get('input[id="select-all-amenities"]').check({ force: true })
        
        cy.contains('a', 'Next').click()

        //Advance Setting
        cy.get('input[value="Property Management"]').check({ force: true })
        cy.contains('a', 'Next').click()

        //Summary
        cy.get('input[id="agree"]').check({ force: true })
        cy.contains('a', 'Submit Verification').click()

        //validation
        cy.url().should('include', '/me/properties')



    
    })
})
