import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
},  {
    timestamps: true,  //createdAt and updatedAt
    } 
);

const User = mongoose.model('User', userSchema);
//mongoose will take it as users collection in the database

export default User;