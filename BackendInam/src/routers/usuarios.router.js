import Router from 'express';
import {obtenerUsuarios, obtenerUsuarioPorId, crearUsuario, actualizarUsuario, eliminarUsuario, validarUsuario} from '../controllers/usuario.controller.js';
import { validarToken } from '../controllers/usuario.controller.js';

const router = Router();

router.get('/listar',obtenerUsuarios);
router.get('/buscar/:id',obtenerUsuarioPorId);
router.post('/registrar',crearUsuario);
router.put('/actualizar/:id',actualizarUsuario);
router.delete('/eliminar/:id',eliminarUsuario);

router.post('/validar', validarUsuario);

export default router;
