const mongoose = require('mongoose')
mongoose.Promise = Promise
const db = require('../config/s3.config').mongoUri;
function connectToOriginalDb(){
    mongoose
    .connect(db)
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err))
}
// function connectToTestDb(){
//     return mongoose.connect(process.env.mongodbMockURI, { useMongoClient: true});
// }




// mongoose.connection.on('open', () => console.log('Db connected'))

// mongoose.connection.on('error', (error) => {
//     throw new Error(error)
// })
module.exports  = {connectToOriginalDb}


