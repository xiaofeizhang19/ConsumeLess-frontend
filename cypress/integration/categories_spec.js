describe('Categories', function(){
    it('displays our categories to select from', function (){
        cy.visit('http://localhost:3000/categories')
        cy.get('div')
            cy.should(($div) => {
                expect($div).to.contain('The outdoors is overrated. Keep yourself inside away from the bugs with these board games.')
        })
    })
    it('displays our categories to select from', function (){
        cy.visit('http://localhost:3000/categories')
        cy.get('div')
            cy.should(($div) => {
                expect($div).to.contain('The outdoors is overrated. Keep yourself inside away from the bugs with these board games.')
        })
    })
})