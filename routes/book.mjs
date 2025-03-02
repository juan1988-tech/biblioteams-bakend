import express from 'express';
import { proofBook, registerBook }  from '../controllers/book.mjs';
const router = express.Router();

router.get('/prueba-libro',proofBook);
router.post('/registrar-libro',registerBook);

export default router;

