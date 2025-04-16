import FeedBack from '../models/feedback.model.js';

export const createFeedBack = async (req, res) => {
    const feed = req.body; //user will send data

    if(!feed.name || !feed.email || !feed.rating || !feed.message) {
        return res.status(400).json({ success:false, message: 'Please provide all details' });
    }

    const newFeed = new FeedBack(feed);

    try{
        await newFeed.save();
        res.status(201).json({ success: true, data: newFeed });
    } catch(error){
        console.error("Error in Create Feedback:", error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};