import OrganizationRepository from 'src/repository/OrganizationRepository.mjs'

class UpdateOrganization {
    async execute(organizationData, responder) {
        try {
            const updatedOrganization = await OrganizationRepository.update(organizationData)
            responder.success(updatedOrganization)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new UpdateOrganization()
