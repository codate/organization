import mongoose from 'mongoose'

const OrganizationSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    docNumber: {type: String, required: true, unique: true},
    members: [{
        person: {type: mongoose.Schema.Types.ObjectId, ref: 'Person', required: true},
        roles: [{type: String, required: false}]
    }],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

export default mongoose.model('Organization', OrganizationSchema)
