require('dotenv/config');
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}${process.env.CLUNSTER}`)
mongoose.Promise = global.Promise
module.exports = mongoose