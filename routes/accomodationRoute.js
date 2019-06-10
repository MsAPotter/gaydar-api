const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/accomodationControl');

router.get('/api/accomodations/', controller.index);
router.get('/api/accomodations/:accomodationId', controller.findById);
router.post('/api/accomodations/', controller.create);
router.put('/api/accomodations/:accomodationId', controller.update);
router.delete('/api/accomodations/:accomodationId', controller.delete);

modules.exports = router;
