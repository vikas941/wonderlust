const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const listingController = require("../controllers/reviews.js");



 // Review post route
 router.post("/", 
    isLoggedIn,
    validateReview, 
    wrapAsync(listingController.createReview));

// Delete Review route
router.delete("/:reviewId", 
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(listingController.destroyReview));


module.exports = router;