const mongoose = require('mongoose')

var schema = mongoose.Schema({ value: String });
var Values = mongoose.model('values', schema);


async function ConnectDB(mongoURL) {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true
            , useUnifiedTopology: true
            , useCreateIndex: true,
            useFindAndModify: false
        })
        console.log`'MongoDb connect to ${mongoURL}`;

    } catch (err) {
        console.log(err)
    }
}



module.exports = ConnectDB;