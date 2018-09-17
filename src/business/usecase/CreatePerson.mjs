import geolocationRepository from 'src/repository/GeolocationRepository.mjs'
import personRepository from 'src/repository/PersonRepository.mjs'

class CreatePerson {
    async execute(personData, responder) {
        try {
            personData.localization = await geolocationRepository.getLocation(personData.address)
            const createdPerson = await personRepository.create(personData)
            responder.success(createdPerson)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new CreatePerson()
