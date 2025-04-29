import mongoose from 'mongoose';
import Event from '../models/event.model.js';

export const getEventsByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const events = await Event.find({ category });
        if (events.length > 0) {
            res.status(200).json({ success: true, data: events });
        } else {
            res.status(404).json({ success: false, message: 'No events found for this category' });
        }
    }
    catch (error) {
        console.error("Error in Fetch events by category:", error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export const createEvent = async (req, res) => {
    const event = req.body; //user will send data

    if(!event.name || !event.city || !event.college || !event.date || !event.category || !event.description || !event.image) {
        return res.status(400).json({ success:false, message: 'Please provide all details' });
    }

    const newEvent = new Event(event);

    try{
        await newEvent.save();
        res.status(201).json({ success: true, data: newEvent });
    } catch(error){
        console.error("Error in Create event:", error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export const updateEvent = async (req, res) => {
    const {id} = req.params;

    const event = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: 'Invalid event id' });
    }

    try{
        const updatedEvent = await Event.findByIdAndUpdate(id, event, {new: true});
        res.status(200).json({ success: true, data: updatedEvent });
    } catch(error){
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export const deleteEvent = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: 'Invalid event id' });
    }
    
    try{
        await Event.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Event deleted successfully' });
    } catch(error){
        console.log("Error in Delete event:", error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export const getEventsByUsername = async (req, res) => {
    const { username } = req.params;

    try {
        const events = await Event.find({ username });
        if (events.length > 0) {
            res.status(200).json({ success: true, data: events });
        } else {
            res.status(404).json({ success: false, message: 'No events found for this user' });
        }
    } catch (error) {
        console.error("Error in Fetch events by username:", error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export const getEventsByCity = async (req, res) => {
    const { city } = req.params;

    try {
        const events = await Event.find({ city : city });
        if (events.length > 0) {
            res.status(200).json({ success: true, data: events });
        } else {
            res.status(404).json({ success: false, message: 'No events found for this location' });
        }
    } catch (error) {
        console.error("Error in Fetch events by location:", error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};