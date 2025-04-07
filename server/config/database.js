import mongoose from 'mongoose'
import 'dotenv/config'

const connectdb = async()=>{

    mongoose.connect(process.env.MONGOuri)
    .then(()=>{console.log("connected to databse")})
    .catch((error)=>{
        console.log(error)
    })
}

export default connectdb;