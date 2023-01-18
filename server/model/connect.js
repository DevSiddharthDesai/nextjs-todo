const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../schemas/user');

const connectURI = process.env.MONGO_DB_URI;

mongoose.set('strictQuery', false);

const connect = async () => {
    
    try{
        await mongoose.connect(connectURI, {
            useNewUrlParser: true,
        })

        console.log("connected");
    }catch(e){
        console.log(`an error occurred ${e.message}`);
    }
}

module.exports = connect;