import mongoose from 'mongoose'
import 'mongoose-geojson-schema'

const PersonSchema = new mongoose.Schema({
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
        zip: String,
        city: String,
        state: String
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}

})

export default mongoose.model('Person', PersonSchema)
