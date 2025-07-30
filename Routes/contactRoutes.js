// const express = require('express');
// const Contactrouter = express.Router();
// const contactController = require('../Controller/contactController');

// Contactrouter.post('/submit', contactController.submitContactForm);

// module.exports = Contactrouter;


const express = require('express');
const router = express.Router();
const contactController = require('../Controller/contactController');

// POST: Submit contact form
router.post('/contact', contactController.submitContactForm);

router.get('/contact', contactController.getContacts);

router.delete('/contact/:id', contactController.deleteContact);

module.exports = router;
