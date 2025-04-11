import express from 'express';
import { listarProdutos, dashboard } from '../controllers/produtoController.js';
import { listarUsuarios } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', dashboard);

//Produtos
router.get('/produtos', listarProdutos);

//Usuarios
router.get('/usuarios', listarUsuarios);

export default router;
