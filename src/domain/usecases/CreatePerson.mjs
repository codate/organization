import Coordinates from '../../adapters/repository/Coordinates.mjs'

export default class CreatePerson {
    constructor(personController, personRepository) {
        this.personController = personController
        this.personRepository = personRepository
    }

    async execute() {
        try {
            const personData = this.personController.getData()
            // TODO verificar necessidade de limpar caracteres especiais de documento
            personData.localization = await Coordinates.updateCoordinates(personData.address)
            const createdPerson = await this.personRepository.save(personData)
            this.personController.sendSuccessResponse(createdPerson)
        } catch (err) {
            this.personController.sendErrorResponse(err)
        }
    }
}
