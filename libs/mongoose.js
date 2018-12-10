const mongoose = require('mongoose');
const host = process.env.MONGO_HOST || 'thiennhan2310:AwfKYEmu92rLcbe@ds115533.mlab.com:15533';
mongoose.connect(`mongodb://${host}/getlink`,{useNewUrlParser: true });

module.exports = mongoose;
