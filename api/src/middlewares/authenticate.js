const jwt = require('jsonwebtoken');

const authenticate = (req,res,next) => {
    const {authorization} = req.headers;
    const token = authorization && authorization.split(' ')[1];

    if(token === null){
        return res.status(401).json({msg:"Token not found"});
        
    }

    jwt.verify(token,process.env.SECRET,(err,user) => {
        if(err) return res.status(400).json({msg:err});
        // console.log(user._doc);
        req.userRole = user._doc.role;
        next();
    })
}

module.exports = authenticate;