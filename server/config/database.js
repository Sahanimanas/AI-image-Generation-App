import mongoose from 'mongoose'
import 'dotenv/config'

const connectdb = async()=>{
    mongoose.connect("mongodb+srv://manas:sahani@cluster0.rd3yezg.mongodb.net")
    .then(()=>{console.log("connected to databse")})
    .catch((error)=>{
        console.log(error)
    })
}

export default connectdb;