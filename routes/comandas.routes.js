import { Router } from 'express';
import * as comandasController from '../controllers/comandas.controllers.js';

const router = Router();

router.post("/comanda", comandasController.getComanda);


export default router;