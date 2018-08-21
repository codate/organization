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
}

export default new PersonRepository()
