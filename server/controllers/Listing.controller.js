import Listing from "../models/Listing.js"

export const createListing = async(req, res, next) => {
    try{

        const listing = await Listing.create(req.body);
        return res.status(200).json({
            success: true,
            message: "Listing created successfully.",
            message: listing
            
        })

    } catch(err) {
        next(err);
    
}

};

export const updateListing = async(req, res, next) => {
    if(req.listing.id != req.params.id)
            return next(401, "You can only update your own account!");

    try{

        const updatedListing = Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedListing)
        

    } catch(error){
        next(error);
    }
};
