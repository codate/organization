import OrganizationRepository from 'src/repository/OrganizationRepository.mjs'

class RemoveMemberFromOrganization{
    async execute(organizationId,memberId, responder){
        try {
            const organization = await OrganizationRepository.removeMemberById(organizationId,memberId)
            responder.success(organization)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new RemoveMemberFromOrganization()
