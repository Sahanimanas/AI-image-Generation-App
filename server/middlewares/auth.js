import jwt  from 'jsonwebtoken'
import 'dotenv/config'


const userauth = async(req,res,next) =>{
    const {token} = req.headers;
    console.log(token)
     if(!token){
        return   res.send("please register")
     } 
    try{

        const tokendecode = jwt.verify(token,process.env.secret_key);  
        
        req.body.userid = tokendecode.id;
        
        next();

    } catch(err){
      
        res.send(err)
    }


}
export default userauth;