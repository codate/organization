import organizationRepository from "../../repository/OrganizationRepository";

class GetMembersByOrganizationId {
    async execute(organizationId, responder) {
        try {
            const organization = await organizationRepository.getOrganizationByIdWithMembers(organizationId)

            if (!organization || !organization[0]) {
                responder.success([])
            }

            const partialMembers = organization[0].members;
            const people =  organization[0].people;

            const fullMembers = partialMembers.map(function (member) {
                let person = people.find(function (person) {
                    if(member.person._id.equals(person._id)){
                        return person
                    }
                })

                return {
                    _id: member._id,
                    roles: member.roles,
                    person: person
                };
            });

            responder.success(fullMembers)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new GetMembersByOrganizationId()
