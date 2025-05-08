const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const caoController = require('../controllers/caoController');

router.post('/', upload.single('imagem'), caoController.createCao);
router.get('/', caoController.getCaes);
router.put('/:id', caoController.updateCao);
router.delete('/:id', caoController.deleteCao);

module.exports = router;
