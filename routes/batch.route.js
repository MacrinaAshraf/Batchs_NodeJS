const router = require('express').Router();
const batchController = require('../controllers/batch.controller');


router.get('/', batchController.getAll);
router.post('/', batchController.create);

module.exports = router;