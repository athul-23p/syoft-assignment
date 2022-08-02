
const isAdmin = (req,res,next) => {
    if(req.userRole !== 'admin') return res.status(401).json({msg:"Unauthorized"});
    next();
}

module.exports = isAdmin;