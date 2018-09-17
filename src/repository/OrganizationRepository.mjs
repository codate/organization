import Organization from './Organization.mjs'

class OrganizationRepository {
    async create(organizationData) {
        const created = await Organization.create(organizationData)
        return created
    }

    async update(organizationData) {
        const updated = await Organization.update(organizationData)
        return updated
    }

    async remove(id) {
        const removed = await Organization.deleteOne({_id: id})
        return removed
    }

    async getById(id){
        const organization = await Organization.findOne({_id:id})
        return organization
    }

    async putMembers(organizationId, members) {
        const updated = await Organization.update({_id:organizationId},{"$addToSet":{"members":{"$each":members}}})
        return updated
    }
}

export default new OrganizationRepository()
