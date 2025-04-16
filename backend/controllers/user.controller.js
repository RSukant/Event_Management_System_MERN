import mongoose from 'mongoose';
import User from '../models/user.model.js';


export const createUser = async (req, res) => {
    const user = req.body;

    if(!user.username || !user.email || !user.password) {
        return res.status(400).json({ success:false, message: 'Please provide all details' });
    }

    try{
        const existingEmail = await User.findOne({ email:user.email });
        if (existingEmail) {
            return res.status(400).json({ success: false, message: 'Email already in use' });
        }

        const existingName = await User.findOne({ username:user.username });
        if (existingName) {
            return res.status(400).json({ success: false, message: 'Username already in use' });
        }

        const newUser = new User(user);
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch(error){
        console.error("Error in Create user:", error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export const getUserAccount = async (req, res) => {
    const { email } = req.params;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(200).json({ success: true, message: 'User data retrieved', data: existingUser });
        } else {
            return res.status(404).json({ success: false, message: "User doesn't exist" });
        }

    } catch (error) {
        console.error("Error in Getting User Account:", error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Please provide correct email and password' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ success: false, message: 'Invalid credentials' });
        }

        if (existingUser.password !== password) {
            return res.status(404).json({ success: false, message: 'Invalid credentials' });
        }

        return res.status(200).json({ success: true, message: 'Welcome back '+existingUser.username, data: existingUser });
    } catch (error) {
        console.error("Error in Login User:", error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ success: false, message: 'Invalid user id' });
    }

    try{
        const updatedProfile = await User.findByIdAndUpdate(id, user, {new: true});
        res.status(200).json({ success: true, data: updatedProfile });
    } catch(error){
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};