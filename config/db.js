const mongoose = require('mongoose')

const ConnectDB = async() =>{
    try {
        const URL = process.env.url
        await mongoose.connect(URL)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB;