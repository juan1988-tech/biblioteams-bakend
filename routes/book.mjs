import express from 'express';
import proofBook from '../controllers/book.mjs';
const router = express.Router();

router.get('/prueba-libro',proofBook)

export default router;

