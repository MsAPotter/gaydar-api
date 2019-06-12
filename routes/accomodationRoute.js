const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/accomodationControl.js');

// GET request for Index:  /api/accomodations/
router.get('/', controller.index);

// router.get('/api/accomodations/:accomodationId'
router.get('/:accomodationId', controller.findById);

// router.post('/api/accomodations/'
router.post('/', controller.create);

// router.put('/api/accomodations/:accomodationId'
router.put('/:accomodationId', controller.update);

// router.delete('/api/accomodations/:accomodationId'
router.delete('/:accomodationId', controller.delete);

module.exports = router;
