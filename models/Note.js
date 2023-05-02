const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
    {  

        user: {
            type: mongoose.Schema.Types.ObjectId ,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        longitude: {
            type: Number,
            required: true

        },
        
        latitude: {
            type: Number,
            required: true

        },
        updatedLongitude: {
            type: Number,
            required: false

        },
        
        updatedLatitude: {
            type: Number,
            required: false

        }
        
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Note', noteSchema)