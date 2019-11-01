describe('Login', function(){
    it('displays page from localhost ', function (){
            cy.visit('http://localhost:3000')
          })

          it('it focuses the input', () => {
            cy.visit('http://localhost:3000')
            cy.get('h1')
            cy.should(($h1) => {
                expect($h1).to.contain('Welcome to Consume£e$$')
            })
          })
})