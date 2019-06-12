const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/reviewControl');

// GET request for index:  /api/accomodations/:accomodationId/reviews/
router.get('/', controller.index);

router.post('/', controller.create);
router.put('/:reviewId', controller.update);
router.delete('/:reviewId', controller.delete);

module.exports = router;
