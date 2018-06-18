import mongoose from 'mongoose'

const PersonSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    docNumber: {type: String, required: true, unique: true},
    location: mongoose.Schema.Types.Point,
    phoneNumber: {type: String, required: true},
    photo: {type: String},
    email: {type: String, required: true},
    address: {
        street: String,
        number: String,
        supplement: String,
        district: String,
        zipcode: String,
        city: String,
        state: String
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}

})

export const Person = mongoose.model('Person', PersonSchema)
