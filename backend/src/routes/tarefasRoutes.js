const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.get('/', tarefasController.listar);
router.post('/', tarefasController.criar);
router.put('/:id', tarefasController.concluir);
router.delete('/:id', tarefasController.remover);

module.exports = router;
