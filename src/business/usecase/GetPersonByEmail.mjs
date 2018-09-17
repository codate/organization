import geolocationRepository from 'src/repository/GeolocationRepository.mjs'
import personRepository from "../../repository/PersonRepository";

class GetPersonByEmail{
    async execute(email, responder){
        try {
            const person = await personRepository.getPersonByEmail(email)
            responder.success(person)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new GetPersonByEmail()
