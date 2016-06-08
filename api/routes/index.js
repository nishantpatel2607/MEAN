var express = require('express');
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

router
.route('/hotels')
.get(ctrlHotels.hotelsGetAll)
.post(ctrlHotels.hotelsAddOne);

router
.route('/hotels/:hotelId')
.get(ctrlHotels.hotelsGetOne);



//Review roots
router
.route('/hotels/:hotelId/reviews')
.get(ctrlReviews.reviewsGetAll);

router
.route('/hotels/:hotelId/reviews/:reviewId')
.get(ctrlReviews.reviewsGetOne);


module.exports = router;