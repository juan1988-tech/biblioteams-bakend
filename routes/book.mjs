import express from 'express';
import { proofBook, registerBook, listBook }  from '../controllers/book.mjs';
const router = express.Router();

router.get('/proof-book',proofBook);
router.post('/register-book',registerBook);
router.get('/list-book',listBook);


export default router;

