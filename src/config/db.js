const mongoose = require('mongoose')

async function ConnectDB(mongoURL) {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true })
        console.log`'MongoDb connect to ${mongoURL}`;
        
    } catch (err) {
        console.log(err)

        
    }
}