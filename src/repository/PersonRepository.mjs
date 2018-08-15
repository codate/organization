import Person from './Person.mjs'

class PersonRepository {
    async save(personData) {
        const person = new Person(personData)
        const savedPerson = await person.save(personData)
        return savedPerson
    }
}

export default new PersonRepository()
