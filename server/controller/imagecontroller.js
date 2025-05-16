import usermodel from "../models/userschema.js";
import FormData from 'form-data'
import axios from "axios";
import 'dotenv/config'

export const generateImage = async(req,res)=>{
    try{
        const {userid, prompt} = req.body;

        const user = await usermodel.findById(userid);
        console.log(prompt)
        if(!user || !prompt){
            return res.json({success:false,message:'Missing Details'})
        }
        if(user.creditBalance === 0 || usermodel.creditBalance<0){
            return res.json({success:false, message:'No credit Balnace',creditbalance:creditBalance})
        }

        const formdata = new FormData();
        formdata.append('prompt',prompt)
        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',formdata,{
            headers:{
                'x-api-key':process.env.Api_key
            },
            responseType:'arraybuffer'
        })
 
        const base64image = Buffer.from(data, 'binary').toString('base64')
        const resultimage = `data:image/png;base64,${base64image}`
        await usermodel.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance-1})
        res.json({success:true,message:"Image generated",creditbalance:user.creditBalance-1,resultimage})

    }
    catch(err){
        console.log(err)
        res.send(err)

    }
}