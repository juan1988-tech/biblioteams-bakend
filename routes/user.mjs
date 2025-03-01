import express from 'express';
import proofUser from '../controllers/user.mjs';
const router = express.Router();

router.get('/prueba-usuario',proofUser)

export default router;