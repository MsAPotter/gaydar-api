const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/reviewControl');

router.get('/', controller.index);
router.post('/', controller.create);
router.put('/:reviewId', controller.update);
router.delete('/:reviewId', controller.delete);

module.exports = router;
