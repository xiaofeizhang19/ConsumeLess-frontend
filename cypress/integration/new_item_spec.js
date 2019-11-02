// ./node_modules/.bin/cypress open

describe('New Item Form', function(){
  it('it redirects to items page after submit', () => {
      cy.visit('http://localhost:3000/items/new')
      cy.get('input[name=name]').type('another item')
      cy.get('input[name=email]').type('email@yahoo.com')
      cy.get('textarea[name=description]').type('another item description')
      cy.get('input[name=category]').type('some cat')
      cy.get('input[name=overdue_charge]').type('10.00')
      cy.get('button').click()
      cy.should(($h1) => {
          expect($h1).to.contain('Items to Borrow')
      })
    })
})
