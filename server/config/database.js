import mongoose from "mongoose";
import 'dotenv/config'

const connectdb  = async() =>{
     await mongoose.connect(`${process.env.MONGOuri}/imagify`,{})
    .then(console.log('database connected'))
    .catch((err)=>{
        console.log(err)
    })
}

export default connectdb;
