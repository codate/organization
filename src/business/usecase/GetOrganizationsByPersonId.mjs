import organizationRepository from "../../repository/OrganizationRepository";

class GetOrganizationsByPersonId{
    async execute(personId, responder){
        try {
            const organizations = await organizationRepository.getOrganizationsByPersonId(personId)
            responder.success(organizations)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new GetOrganizationsByPersonId()
