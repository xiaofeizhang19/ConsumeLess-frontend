import React from 'react';
import Items from '../Items';
import cypress from 'cypress'
// ./node_modules/.bin/cypress open

describe('Items', function(){
    it('displays random items from API ', function (){
        cypress.request('https://pythonflaskbooks.herokuapp.com/getallusers')
        .should((response)=> {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('username')
            expect(response).to.have.property('email')
        })
    })
})
