Cypress.Commands.add("addApartment", (Name, State, City, District, Village, Tower, Floor, Unit, Developer, Completion) => {
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
            .select('2')
        // cy
        //     .get('[type="checkbox"]')
        //     .check('14', {force: true})

        //Regions
        cy
            .contains('span', 'Country')
            .get('input[placeholder="Select option"]')
            .type('indonesia{enter}', {force: true})
            
        cy
            .get('input[placeholder="Select Area"]')
            .eq(0)
            .type(State,{force: true})
            
        cy
            .get('input[placeholder="Select Area"]')
            .eq(1)
            .type(City,{force: true})
           
        cy
            .get('input[placeholder="Select Area"]')
            .eq(2)
            .type(District, {force: true})
           
        cy
            .get('input[placeholder="Select Area"]')
            .eq(3)
            .type(Village, {force: true})

        //
        cy
            .get('input[name="Featured"]')
            .check({force: true})

        // Tower
        cy 
            .get('input[placeholder="Tower"]')
            .eq(0)
            .type(Tower)
        cy
            .get('input[placeholder="Floor"]')
            .eq(0)
            .type(Floor, {force: true})
        cy
            .get('input[placeholder="Add Tag"]')
            .eq(0)
            .type(Unit)
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
            .get('div[id="map"]')
            .click(275, 175)
        cy
            .get('button[dusk="create-button"]')
            .click()
})