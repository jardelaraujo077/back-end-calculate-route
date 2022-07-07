const mongoose = require('../../config/mongoDB')

const AvalabledSchema = new mongoose.Schema({
    count:{
        type: 'Number'
    },
    createdAt: {
        type: 'Date',
        default: Date.now
    },
})

const Avalabled = mongoose.model('Avalabled', AvalabledSchema)
module.exports = Avalabled