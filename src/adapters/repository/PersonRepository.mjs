import {Person} from '../model/Person.mjs'

export default class PersonRepository {
    async save(personData) {
        const person = new Person(personData)
        return person.save(personData)
    }
}
