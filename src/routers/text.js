const express = require('express');
const text = require('../controllers/text')

const router = express.Router();

router.get('/',text.getText);
router.post('/',text.setText);

module.exports = router;