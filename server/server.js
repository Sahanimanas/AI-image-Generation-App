import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectdb from './config/database.js'

const PORT = process.env.PORT || 4000
//express  app
const app = express();

//middlewares
app.use(express.json())
app.use(cors())

await connectdb();

app.get('/',(req,res)=>{
res.send("API working fine")
})

app.listen(PORT , ()=>{
console.log(`server running on port ${PORT}`)
})