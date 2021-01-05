const express = require('express');
const router = express.Router();
const ScrumController = require('../controllers/ScrumController');

router.get('/:id', ScrumController.getScrumDetails);

module.exports = router;
