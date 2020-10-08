Cypress.Commands.add("addCoworking", (Id, Name, State, City, District, Village, Tower, Floor, Unit, Pax, Grade, Developer, Completion,Management, Lokasi) => {
    cy
        .visit(Cypress.config().backoffice_url + 'resources/property-masters')
    cy
        .contains('Create Property Master')
        .click()
    cy
        .url()
        .should('eq', Cypress.config().backoffice_url + 'resources/property-masters/new?viaResource=&viaResourceId=&viaRelationship=')
    cy
        .get('input[id="Name"]')
        .type(Name)
    cy
        .get('div')
        .contains('translate')
        .click()
    cy
        .xpath('//*[@id="nova"]/div/div[2]/div[2]/div[2]/form/div[1]/div/div[2]/div[1]/div/div/div[2]/select')
        .select(Id)
   

    //Regions
    cy
        .contains('span', 'Country')
        .get('input[placeholder="Select option"]')
        .type('Indonesia{enter}', {force: true})
        
        
    cy
        .get('input[placeholder="Select Area"]')
        .eq(0)
        .type(State + '{enter}',{force: true})
        
        
    cy
        .get('input[placeholder="Select Area"]')
        .eq(1)
        .type(City + '{enter}',{force: true})
        
       
    cy
        .get('input[placeholder="Select Area"]')
        .eq(2)
        .type(District + '{enter}', {force: true})
        
       
    cy
        .get('input[placeholder="Select Area"]')
        .eq(3)
        .type(Village + '{enter}', {force: true})
        

    //
    cy
        .get('input[name="Featured"]')
        .check({force: true})

    // Tower
    cy
        .get('input[placeholder="Suite Name"]')
        .eq(0)
        .type(Unit, {force: true})
    cy
        .get('input[placeholder="4"]')
        .eq(0)
        .type(Pax, {force: true})
    cy
        .get('input[placeholder="Grade"]')
        .type(Grade)  
    cy
        .get('input[placeholder="Developer Name"]')
        .type(Developer)  
    cy
        .get('input[name="Completion Date"]')
        .type(Completion)
    cy
        .get('label[for="completion_date"]')
        .click()
    cy
        .get('div[class="flatpickr-calendar animate showTimeInput open arrowTop"]')
        .should('not.be.visible')
    cy
        .get('input[placeholder="Building Management"]')
        .type(Management)   
    cy
        .get('div[id="map"]')
        .click(275, 175)
    cy
        .get('input[placeholder="Location"]')
        .type(Lokasi)
    cy
        .get('button[dusk="create-button"]')
        .click()
})