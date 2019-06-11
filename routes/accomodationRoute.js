const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/accomodationControl.js');

// router.get('/api/accomodations/', controller.index);
router.get('/', controller.index);

// router.get('/api/accomodations/:accomodationId', controller.findById);
router.get('/:accomodationId', controller.findById);

// router.post('/api/accomodations/', controller.create);
router.post('/', controller.create);

// router.put('/api/accomodations/:accomodationId', controller.update);
router.put('/:accomodationId', controller.update);

// router.delete('/api/accomodations/:accomodationId', controller.delete);
router.delete(':accomodationId', controller.delete);

module.exports = router;
