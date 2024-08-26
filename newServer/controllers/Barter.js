import Barter from "../models/Barter.js";

export const createBarter = async (req, res, next) => {
    const newBarter = new Barter(req.body);
    try {
        const savedBarter = await newBarter.save();
        res.status(201).json(savedBarter);
    } catch (err) {
        next(err)
    }
};

export const updateBarter = async (req, res, next) => {
    try {
        const barter = await Barter.findById(req.params.id);
        await barter.updateOne({ $set: req.body });
        res.status(200).json("The barter has been updated...");
    }
    catch (err) {
        next(err)
    }
}

export const deleteBarter = async (req, res, next) => {
    try {
        await Barter.findByIdAndDelete(req.params.id);
        res.status(200).json("Barter has been deleted...");
    } catch (err) {
        next(err)
    }
};

export const getUserBarters = async (req, res, next) => {
    try {
        const { status, type } = req.query;
        const userId = req.params.userId;
        
        let filter = {};
        if (type === 'requested') {
            filter = { userId, status: status };
        } else if (type === 'received') {
            filter = { requestedTo: userId, status: status };
        } else {
            filter = { $or: [{ userId }, { requestedTo: userId }] };
        }
        
        const barters = await Barter.find(filter);
        res.status(200).json(barters);
    } catch (err) {
        next(err);
    }
};

//GET ALL
export const getAllBarters = async (req, res, next) => {
    try {
        const barters = await Barter.find();
        res.status(200).json(barters);
    } catch (err) {
        next(err)
    }
};
