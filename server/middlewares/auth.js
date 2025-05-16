import jwt  from 'jsonwebtoken'
import 'dotenv/config'


const userauth = async(req,res,next) =>{
    const {token} = req.headers;
    
     if(!token){
        return   res.send("please register")
     } 
   
    try{

        const tokendecode = jwt.verify(token,process.env.secret_key);  
            if (!req.body) {
            req.body = {};
        }

        req.body.userid = String(tokendecode.id)
      console.log(req.body.userid)
        next();

    } catch(err){
      
        res.send("line 1" + err.message)
    }


}
export default userauth;