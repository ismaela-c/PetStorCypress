import pet from '../fixtures/pet.json'

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
    })
  })
  

})//termina a discribe