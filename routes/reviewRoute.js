const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/reviewControl');

// GET request for index:  /api/reviews/
// router.get('/:accomodationId/reviews', controller.index);
router.get('/', controller.index);
router.get('/:reviewId', controller.findById);
router.get('/:accomodationId/reviews', controller.findReviewsForOneLodging);

router.post('/', controller.create);
router.put('/:reviewId', controller.update);
router.delete('/:reviewId', controller.delete);

module.exports = router;
