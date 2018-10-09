import OrganizationRepository from 'src/repository/OrganizationRepository.mjs'

class UpdateMember {
    async execute(organizationId, memberData, responder) {
        try {
            const organization = await OrganizationRepository.updateMember(organizationId,memberData)
            responder.success(organization)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new UpdateMember()
