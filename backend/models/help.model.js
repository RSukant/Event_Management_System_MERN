import mongoose from 'mongoose';

const HelpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},  {
    timestamps: true,  //createdAt and updatedAt
    } 
);

const Help = mongoose.model('Help', HelpSchema);
//mongoose will take it as events collection in the database

export default Help;
