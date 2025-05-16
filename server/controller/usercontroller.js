import usermodel from '../models/userschema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import 'dotenv/config'

const  signup = async(req,res)=>{
    try{
        const {email,name,password} = req.body;
        
        if(!email || !name || !password){
            return res.status(500).json({
                success:false,
                message : 'please provide credential',
            })
        }
 
        const hashedPass = await bcrypt.hash(password,10);
        //storing to daatbase
        const userdata = {
            email, name, password:hashedPass 
    }
       const newuser = new usermodel(userdata)
       const user = await newuser.save();
       //jwt token generation
      
       const token = jwt.sign({id:user._id},process.env.secret_key);
       res.json({success:true,token,user:{name:user.name}})
    }
    catch(err){ 
        res.status(500).send(err)
    }

}

const  login = async(req,res) =>{
 try{
    const {email,password} = req.body;
  
   const user = await usermodel.findOne({email})
   
   if(!user){
   return res.send("please signup")
   }

   const check = await bcrypt.compare(password,user.password)
 
   if(check){
    const token = jwt.sign({id:user._id},process.env.secret_key)
    res.json({success:true,token,user:{name:user.name}})
   }
else
    return res({success:true,message:'Invalid credentials'})
   
 }  catch(err){
    res.status(500).send(err);
 }
}

const  usercredits = async(req,res) =>{
    
    try{
              const {userid} = req.body;
              const user = await usermodel.findById(userid)
               res.status(200).json({
                success:true,
                credits:user.creditBalance,
                user:{name:user.name}
              })
    }
    catch(err){
     
        res.send("line"+err)
    }
}
export {signup,login,usercredits}