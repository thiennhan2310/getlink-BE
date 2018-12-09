const mongoose = require('mongoose');
const host = process.env.MONGO_HOST || 'localhost:27017';
mongoose.connect(`mongodb://${host}/getlink`,{useNewUrlParser: true });

module.exports = mongoose;
