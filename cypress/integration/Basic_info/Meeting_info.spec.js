import "../../support/resources/property_master/AddMeetingMaster.js"

context('Basic Info Validation Test', () => {

    var Faker               = require('faker')
    var Id                  = '6'
    var Name                = 'TCC Batavia'
    var State               = 'Jawa Timur'
    var City                = 'Kota Malang'
    var District            = 'Lowokwaru'
    var Village             = 'Lowokwaru'
    var Tower               = Faker.commerce.productName();
    var Floor               = Faker.random.number();
    var Unit                = Faker.random.number();
    var Pax                 = Faker.random.number();
    var Grade               = 'Grade A'
    var Developer           = Faker.company.companyName();
    var Completion          = '2018-03-15'
    var Management          = Faker.company.companyName();
    var Lokasi              = 'Jl. Raya Tebo Sel. No.b17, Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147, Indonesia | -7.988584,112.601388'


    beforeEach(() => {
        cy.visit(Cypress.config('backoffice_url'));
        cy.loginAdmin();
        cy.url().should('eq', Cypress.config().backoffice_url + 'dashboards/main');
        
    })

    it('Create serviced office Success', () => {
       
        cy.addMeeting(Id, Name, State, City, District, Village, Tower, Floor, Unit, Pax, Grade, Developer, Completion, Management, Lokasi)
        cy.wait(3000)
        cy.contains('p', 'Pasir Kambing, Pasir Kembang, Kec. Maja, Kabupaten Lebak, Banten 42381, Indonesia' )
        cy.contains('p', Name)
        cy.contains('p', State)
        cy.contains('p', District)
        cy.contains('p', Village)
        cy.contains('p', City)
        cy.contains('p', Developer)
        cy.contains('p', Grade)
        cy.contains('p', Management)
        cy.contains('p', 'Mar 2018')



        
             
    
    });
})
