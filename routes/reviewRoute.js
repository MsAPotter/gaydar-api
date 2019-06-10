const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/reviewControl');

router.get('/api/accomodations/:accomodationId/reviews', controller.index);
router.post('/api/accomodations/:accomodationId/reviews', controller.create);
router.put('/api/accomodations/:accomodationId/:reviewId', controller.update);
router.delete('/api/accomodations/:accomodationId/:reviewId', controller.delete);

modules.exports = router;
