import OrganizationRepository from 'src/repository/OrganizationRepository.mjs'

class RemoveOrganization{
    async execute(id, responder){
        try {
            const removedOrganization = await OrganizationRepository.remove(id)
            responder.success(removedOrganization)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new RemoveOrganization()
