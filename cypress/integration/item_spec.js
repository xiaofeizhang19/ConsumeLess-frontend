// ./node_modules/.bin/cypress open

describe('Items', function(){
    it('displays random items from API', function (){
        cy.request('https://pythonflaskbooks.herokuapp.com/getallusers')
        .should((response)=> {
            console.log(response)
            expect(response.status).to.eq(200)
            expect(response.body[0]).to.have.property('username')
            expect(response.body[0]).to.have.property('email')
        })
    })
})