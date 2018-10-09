import Organization from './Organization.mjs'
import mongoose from 'mongoose'

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

    async getById(id) {
        const organization = await Organization.findOne({_id: id})
        return organization
    }

    async createMembers(organizationId, members) {
        const updated = await Organization.update({_id: organizationId}, {"$addToSet": {"members": {"$each": members}}})
        return updated
    }

    async updateMember(organizationId, member){
        const updated = await Organization.update({_id: organizationId}, {"$addToSet": {"members": member}})
        return updated
    }

    async getOrganizationByIdWithMembers(organizationId) {
        const id = mongoose.Types.ObjectId(organizationId);

        const organization = await Organization.aggregate([
            {
                "$match": {_id: id}
            },
            {
                "$lookup": {
                    "from": "people",
                    "localField": "members.person",
                    "foreignField": "_id",
                    "as": "people"
                }
            }
        ])

        return organization
    }

    async getOrganizationsByPersonId(personId) {
        const organizations = await Organization.find({members: {"$elemMatch": {"person": personId}}})
        return organizations
    }
}

export default new OrganizationRepository()
