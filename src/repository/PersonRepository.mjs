import Person from './Person.mjs'

class PersonRepository {
    async create(personData) {
        const created = await Person.create(personData)
        return created
    }

    async update(personData) {
        const updated = await Person.update(personData)
        return updated
    }

    async remove(id) {
        const removed = await Person.deleteOne({_id: id})
        return removed
    }

    async getPersonByEmail(email) {
        const person = await Person.findOne({email:email})
        return person
    }
}

export default new PersonRepository()
