import personRepository from 'src/repository/PersonRepository.mjs'

class RemovePerson{
    async execute(id, responder){
        try {
            const removedPerson = await personRepository.remove(id)
            responder.success(removedPerson)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new RemovePerson()
