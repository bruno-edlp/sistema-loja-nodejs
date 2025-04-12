import express from 'express';
import { listarProdutos, dashboard } from '../controllers/produtoController.js';
import { listarUsuarios } from '../controllers/usuarioController.js';
import { listarPedidos } from '../controllers/pedidoController.js';

const router = express.Router();

router.get('/', dashboard);

//Produtos
router.get('/produtos', listarProdutos);

//Usuarios
router.get('/usuarios', listarUsuarios);

//Pedidos
router.get('/pedidos', listarPedidos);


export default router;
