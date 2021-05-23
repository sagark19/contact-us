const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactUsController');



router.post('/addMessage',contactUsController.addMessage);
router.get('/getMessages',contactUsController.getAllMessages);

module.exports = router;






