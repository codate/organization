import organizationRepository from 'src/repository/OrganizationRepository.mjs'
import personRepository from 'src/repository/PersonRepository'

class PutMembersOnOrganization{
    async execute (members, organizationId, responder){

        try{
            const updatedOrganization = await organizationRepository.putMembers(organizationId,members)
            responder.success(updatedOrganization)
        }catch (err) {
            responder.error(err)
        }
    }
}

export default new PutMembersOnOrganization()
