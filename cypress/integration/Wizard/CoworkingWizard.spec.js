context('Login Test', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('base_url'));
        cy.loginLandlord('landlord@landlord.com', 'landlord')

    })

    it('Create coworking Success', () => {
        
        cy.contains('a', 'Landlord').click()
        cy.get('select[class="form-control roleselector pr-5"]').select('landlord')
        cy.contains('a', 'My Property').click({ force: true })
        cy.wait(2000)
        cy.get('div[class="btn btn-secondary py-2"]').click()
        //cy.get('button[title="Nested option"]').click()

        //Add Property
       
        cy.contains('select', 'Select One').select('4')
        cy.xpath('//*[@id="page-content"]/div/div[2]/div[2]/div/div[2]/div/form/div[1]/div[1]/div[2]/div/div/div/div/input').type('Ngalup')
        cy.get('input[placeholder="Unit"]').type('Suite - 4 Pax')
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
        cy.get('input[name="listing_price"]').type('3500000')
        cy.get('input[name="weekly_price"]').type('14000000')
        cy.get('input[name="monthly_price"]').type('34000000')
        cy.wait(2000)

        cy.get('input[id="day-weekday"]').check({ force: true }).should('be.checked')
        cy.get('input[placeholder="08:00 AM"]').eq(0).type('09:00')
        cy.get('input[placeholder="05:00 PM"]').eq(0).type('17:00')

        cy.contains('a', 'Next').click()

        //Info detail
        cy.get('textarea[name="description"]').type('Lorem ipsum dolor set amet')
        cy.get('input[name="year_built"]').type('2019')
        cy.contains('select', 'Certificate').select('SHM - Sertifikat Hak Milik')
        cy.get('input[name="building_area"]').type('20')
        cy.contains('select', 'Electrical Power').select('900 Watt')
        cy.get('input[name="carport"]').type('1')
        cy.contains('select', 'Maid Bedroom').select('1')
        cy.contains('select', 'Bedroom').select('1')
        cy.contains('select', 'Bathroom').select('1')
        cy.contains('select', 'Interior').select('Full Furnished')
        cy.contains('select', 'Building Orientation').select('North')
        cy.get('input[name="floors"]').type('27') 
        cy.fixture(fileName).then(fileContent => {
            cy.get('input[name="property_type_document__1"]').upload({fileContent, fileName, mimeType: 'image/jpg'});
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

    it('Create Coworking Success Using property master', () => {
    
    cy.contains('a', 'Landlord').click()
        cy.get('select[class="form-control roleselector pr-5"]').select('landlord')
        cy.contains('a', 'My Property').click({ force: true })
        cy.wait(2000)
        cy.get('div[class="btn btn-secondary py-2"]').click()
        //cy.get('button[title="Nested option"]').click()

        //Add Property
       
        cy.contains('select', 'Select One').select('4')
        cy.xpath('//*[@id="page-content"]/div/div[2]/div[2]/div/div[2]/div/form/div[1]/div[1]/div[2]/div/div/div/div/input').type('ngalup')
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
         cy.get('input[name="listing_price"]').type('3500000')
         cy.get('input[name="weekly_price"]').type('14000000')
         cy.get('input[name="monthly_price"]').type('34000000')
         cy.wait(2000)
        
        cy.get('input[id="day-weekday"]').check({ force: true }).should('be.checked')
        cy.get('input[placeholder="08:00 AM"]').eq(0).type('09:00')
        cy.get('input[placeholder="05:00 PM"]').eq(0).type('17:00')

        cy.contains('a', 'Next').click()

        //Info detail
        cy.get('textarea[name="description"]').type('Lorem ipsum dolor set amet')
        cy.get('input[name="year_built"]').type('2019')
        cy.contains('select', 'Certificate').select('SHM - Sertifikat Hak Milik')
        cy.get('input[name="building_area"]').type('20')
        cy.contains('select', 'Electrical Power').select('900 Watt')
        cy.get('input[name="carport"]').type('1')
        cy.contains('select', 'Maid Bedroom').select('1')
        cy.contains('select', 'Bedroom').select('1')
        cy.contains('select', 'Bathroom').select('1')
        cy.contains('select', 'Interior').select('Full Furnished')
        cy.contains('select', 'Building Orientation').select('North')
        cy.get('input[name="floors"]').type('27') 
        cy.fixture(fileName).then(fileContent => {
            cy.get('input[name="property_type_document__1"]').upload({fileContent, fileName, mimeType: 'image/jpg'});
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
