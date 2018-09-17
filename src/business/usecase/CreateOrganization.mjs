import organizationRepository from 'src/repository/OrganizationRepository.mjs'

class CreateOrganization {
    async execute(organizationData, responder) {
        try {
            const createdOrganization = await organizationRepository.create(organizationData)
            responder.success(createdOrganization)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new CreateOrganization()
