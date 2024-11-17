const mongoose = require('mongoose');
const colors = require('colors');
mongoose.set('strictQuery', false);


const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL),
        console.log(`Server running On ${mongoose.connection.host}`.bgCyan.white)
    }
    catch(error){
        console.log(`${error}`.bgRed)
    }
}

module.exports =connectDb