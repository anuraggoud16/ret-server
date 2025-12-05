import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const signup = async (req, res)=> {
    const {name, email, password} = req.body;
    const exitingUser = await User.findOne({email});
    
    if(exitingUser) return res.status(400).json({msg: "User already exists"});

    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({name, email, password: hashed});

    await newUser.save();

   res.status(201).json({msg: "User Created"});
}

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user) return res.status(404).json({msg: "email not registered"});

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) return res.status(400).json({msg: "Invalid password"});

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    res.json({token, user});
    
}

export {signup, login};