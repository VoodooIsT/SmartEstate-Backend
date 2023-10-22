import Listing from "../models/Listing.js"

export const createListing = async(req, res, next) => {
    try{

        const listing = await Listing.create(req.body);

    } catch(err) {

    }
}
export const getUSer = async(req, res, next) => {
    
}