Cypress.Commands.add("addApartmentProperty", (Property_Id, Name, State, City, District, Village, Unit, Sales_type, 
    Tower, Floor, Unit, Address, Maps, Listing, Deposit, Yearly, Deskripsi, Year, Certificate, Building_area, Electrical, Carport,
    Maid_room, Bedroom, Bathroom, Interior, Orientation, Floor) => {
    cy
        .contains('a', 'Landlord').click()
    cy
        .get('select[class="form-control roleselector pr-5"]')
        .select('landlord')
    cy
        .contains('a', 'My Property').click({ force: true })
    cy
        .wait(2000)
    cy
        .get('div[class="btn btn-secondary py-2"]').click()
    //cy.get('button[title="Nested option"]').click()

    //Add Property
    cy
        .contains('select', 'Select Country')
        .select(Country)
    cy
        .contains('select', 'Select Province')
        .select(State)
    cy
        .contains('select', 'Select City')
        .select(City)
    cy
        .contains('select', 'Select One')
        .select(Property_Id)
    cy
        .xpath('//*[@id="page-content"]/div/div[2]/div[2]/div/div[2]/div/form/div[1]/div[1]/div[2]/div/div/div/div/input')
        .type(Name)
    cy
        .get('input[id="customRadio2"]')
        .check(Sales_type, { force: true })
    cy
        .contains('select', 'Select One')
        .select('{downarrow}{enter}')
    
    cy
        .get('textarea[name="property-address"]')
        .type(Address)
    cy
        .get('input[placeholder[placeholder="Masukkan lokasi"]')
        .type(Maps  + '{downarrow}{enter}')
        
    cy
        .contains('select', 'Select District')
        .select(District)
    cy
        .contains('select', 'Select Village')
        .select(Village)
    cy
        .contains('a', 'Next')
        .click()
    cy
        .wait(2000)
        
        //Media
    const fileName = 'test.jpg';

    cy
        .fixture(fileName)
        .then(fileContent => {
            cy
                .get('input[id="image-property-0"]')
                .upload({fileContent, fileName, mimeType: 'image/jpg'});
        });
    cy
        .contains('a', 'Next')
        .click()
    cy
        .wait(2000)

        //Price Info
    cy  
        .get('input[name="listing_price"]')
        .type(Listing)
    cy
        .get('input[name="security_deposit"]')
        .type(Deposit)
    cy
        .get('input[name="yearly_price"]')
        .type(Yearly)
    cy
        .wait(2000)
    cy
        .get('input[id="day-weekday"]')
        .should('be.checked')

    cy
        .contains('a', 'Next')
        .click()

    //Info detail
    cy
        .get('textarea[name="description"]')
        .type(Deskripsi)
    cy
        .get('input[name="year_built"]')
        .type(Year)
    cy
        .contains('select', 'Certificate')
        .select(Certificate)
    cy  
        .get('input[name="building_area"]')
        .type(Building_area)
    cy
        .contains('select', 'Electrical Power')
        .select(Electrical)
    cy
        .get('input[name="carport"]')
        .type(Carport)
    cy
        .contains('select', 'Maid Bedroom')
        .select(Maid_room)
    cy
        .contains('select', 'Bedroom')
        .select(Bedroom)
    cy
        .contains('select', 'Bathroom')
        .select(Bathroom)
    cy
        .contains('select', 'Interior')
        .select(Interior)
    cy
        .contains('select', 'Building Orientation')
        .select(Orientation)
    cy   
        .get('input[name="floors"]')
        .type(Floor) 
    cy
        .fixture(fileName)
        .then(fileContent => {
            cy
                .get('input[name="property_type_document__1"]')
                .upload({fileContent, fileName, mimeType: 'image/jpg'});
        });
        
    cy
        .contains('a', 'Next')
        .click()

    //Amenities Facilities
    cy
        .get('input[id="select-all-amenities"]')
        .check({ force: true })
        
    cy
        .contains('a', 'Next')
        .click()

    //Advance Setting
    cy
        .get('input[value="Property Management"]')
        .check({ force: true })
    cy
        .contains('a', 'Next')
        .click()

    //Summary
    cy
        .get('input[id="agree"]')
        .check({ force: true })
    cy
        .contains('a', 'Submit Verification')
        .click()

    //validation
    cy
        .url()
        .should('include', '/me/properties')
    
})