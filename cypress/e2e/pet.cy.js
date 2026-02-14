import pet from '../fixtures/pet.json'
import petPut from '../fixtures/petPut.json'

describe('CRUD da entidade Pet', () => {
  it('POST Pet', () =>{
    cy.request({
      method: 'POST',
      url: '/pet',
      body: pet
    }).then(({status, body}) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(pet.id)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.status).to.eq(pet.status)
    })
  })//fim do post
  it('GET Pet', () =>{
    cy.request({
      url: `/pet/${pet.id}`,
      method: 'GET'      
    }).then(({status, body})=> {
      expect(status).to.eq(200)
      expect(body.id).to.eq(pet.id)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.status).to.eq(pet.status) 
    })//fim do get

    it('PUT Pet', ()=>{
      cy.request({
        url: '/pet',
        method: 'PUT',
        body: petPut
      }).the(({status, body})=>{
        expect(status).to.eq(200)
        expect(body.id).to.eq(petPut.id)
        expect(body.name).to.eq(petPut.name)
        expect(body.category.id).to.eq(petPut.category.id)
        expect(body.category.name).to.eq(petPut.category.name)
        expect(body.tags[0].id).to.eq(petPut.tags[0].id)
        expect(body.status).to.eq(petPut.status) 

      })
    })//termina put
  })
  

})//termina a discribe