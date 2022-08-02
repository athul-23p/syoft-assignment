
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
router.post('/register',async (req,res) => {
    try {
        const {body} = req;
        // check if email registerd or not
        let user = await User.findOne({email:body.email}).exec();
        if(user !== null){
            res.status(200).json({msg:"Email already registered"});
            return;
        }
        // create new user
        user = await User.create(body);
        res.status(201).json({msg:"User account created"});

    } catch (error)  {
        res.status(400).send(error.message);
    }
})

router.post("/login", async (req, res) => {
  try {
    const {body} = req;
    // check if user exists or  not
    let user = await User.findOne({ email: body.email }).exec();
    if (user === null) {
      res.status(200).json({ msg: "User not found" });
      return;
    }
    if(user.password !== body.password){
        res.status(200).json({msg:"Password or email incorrect"});
    }
    // console.log(user);
    const token = jwt.sign({...user},process.env.SECRET)
    const {username,email,phone,role} = user;
    res.status(200).json({user:{username,email,phone,role},token})
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;