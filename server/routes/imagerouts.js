import express from 'express'
import {generateImage} from '../controller/imagecontroller.js'
import userauth from '../middlewares/auth.js'
const imagerouter = express.Router()

imagerouter.post('/generate-image',userauth,generateImage);

export default imagerouter