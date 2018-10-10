import OrganizationRepository from 'src/repository/OrganizationRepository.mjs'

class RemoveMemberFromOrganizationByPersonId{
    async execute(organizationId,personId, responder){
        try {
            const organization = await OrganizationRepository.removeMemberByPersonId(organizationId,personId)
            responder.success(organization)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new RemoveMemberFromOrganizationByPersonId()
