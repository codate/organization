import geolocationRepository from 'src/repository/GeolocationRepository.mjs'
import personRepository from 'src/repository/PersonRepository.mjs'

class UpdatePerson {
    async execute(personData, responder) {
        try {
            personData.localization = await geolocationRepository.getLocation(personData.address)
            const updatedPerson = await personRepository.update(personData)
            responder.success(updatedPerson)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new UpdatePerson()
