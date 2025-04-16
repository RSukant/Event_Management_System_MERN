import Help from '../models/help.model.js';

export const createHelp = async (req, res) => {
    const help = req.body; //user will send data

    if(!help.name || !help.email || !help.message) {
        return res.status(400).json({ success:false, message: 'Please provide all details' });
    }

    const newHelp = new Help(help);

    try{
        await newHelp.save();
        res.status(201).json({ success: true, data: newHelp });
    } catch(error){
        console.error("Error in Sending Help to Admin:", error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};