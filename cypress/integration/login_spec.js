describe('Login', function(){
    it('displays page from localhost ', function (){
            cy.visit('http://localhost:3000')
          })

          it('it focuses the input', () => {
            cy.visit('http://localhost:3000')
            cy.get('h2')
            cy.should(($h2) => {
                expect($h2).to.contain('Welcome to Consume£e$$')
            })
          })
})