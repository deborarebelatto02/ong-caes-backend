const express = require('express');
const router = express.Router();
const adocaoController = require('../controllers/adocaoController');

router.post('/', adocaoController.createAdocao);

module.exports = router;
