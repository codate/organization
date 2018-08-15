import Coordinates from 'src/repository/Coordinates.mjs'
import personRepository from 'src/repository/PersonRepository.mjs'

export default class CreatePerson {
    async execute(personData, responder) {
        try {
            personData.localization = await Coordinates.updateCoordinates(personData.address)
            const createdPerson = await personRepository.save(personData)
            responder.success(createdPerson)
        } catch (err) {
            responder.error(err)
        }
    }
}
