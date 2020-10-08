import "../../support/resources/property_master/AddApartementMaster.js"

context('Basic Info Test', () => {

    describe('Create apartment Basic info', () => {

        var Faker               = require('faker')
        var Id                  = '2'
        var Name                = 'Merry'
        var State               = 'Jawa Timur'
        var City                = 'Kota Malang'
        var District            = 'Lowokwaru'
        var Village             = 'Lowokwaru'
        var Tower               = Faker.commerce.productName();
        var Floor               = Faker.random.number();
        var Unit                = Faker.random.number();
        var Developer           = Faker.company.companyName();
        var Completion          = '2018-03-15'
        var Lokasi              = 'Jl. Raya Tebo Sel. No.b17, Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147, Indonesia | -7.988584,112.601388'


        beforeEach(() => {
            cy.visit(Cypress.config('backoffice_url'));
            cy.loginAdmin();
            cy.url().should('eq', Cypress.config().backoffice_url + 'dashboards/main');
            
        })

        it('Create apartment Success', () => {
        
            cy.addApartment(Id, Name, State, City, District, Village, Tower, Floor, Unit, Developer, Completion, Lokasi)
            cy.wait(3000)
            cy.contains('p', 'Pasir Kambing, Pasir Kembang, Kec. Maja, Kabupaten Lebak, Banten 42381, Indonesia' )
            cy.contains('p', Name)
            cy.contains('p', State)
            cy.contains('p', District)
            cy.contains('p', Village)
            cy.contains('p', City)
            cy.contains('p', Developer)
            cy.contains('p', 'Mar 2018')

        });

    });

    describe('Create apartment property', () => {

        var Faker               = require('faker')
        var Property_Id         = '2'
        var Name                = 'Merry'
        var State               = '11'
        var City                = '159'
        var District            = '12091'
        var Village             = '196375'
        // var Sales_type 
        // var Tower
        // var Floor
        // var Unit
        // var Address
        // var Maps
        // var Listing
        // var Deposit
        // var Yearly
        // var Deskripsi
        // var Year
        // var Certificate
        // var Building_area
        // var Electrical
        // var Carport
        // var Maid_room
        // var Bedroom
        // var Bathroom
        // var Interior
        // var Orientation
        // var Floor

        beforeEach(() => {
            cy.visit(Cypress.config('base_url'));
            cy.loginLandlord('landlord@landlord.com', 'landlord')
            
        })

        it('Create apartment property Success', () => {
        
            cy.addApartmentProperty(Property_Id, Name, State, City, District, Village, Unit, Sales_type, 
                Tower, Floor, Unit, Address, Maps, Listing, Deposit, Yearly, Deskripsi, Year, Certificate, Building_area, Electrical, Carport,
                Maid_room, Bedroom, Bathroom, Interior, Orientation, Floor)
            cy.wait(3000)
            cy.contains('p', 'Pasir Kambing, Pasir Kembang, Kec. Maja, Kabupaten Lebak, Banten 42381, Indonesia' )
            cy.contains('p', Name)
            cy.contains('p', State)
            cy.contains('p', District)
            cy.contains('p', Village)
            cy.contains('p', City)
            cy.contains('p', Developer)
            cy.contains('p', 'Mar 2018')

        });

    });
})
