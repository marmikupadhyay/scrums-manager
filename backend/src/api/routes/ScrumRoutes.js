const express = require('express');
const router = express.Router();
const ScrumController = require('../controllers/ScrumController');

router.get('/allScrums', ScrumController.getScrumDetails);
router.post('/createScrum', ScrumController.createNewScum);
router.post('/addItem/:scrum_id', ScrumController.addScrumItem);

module.exports = router;
