import express from 'express';
import { proofBook, registerBook, listBook, updateBook }  from '../controllers/book.mjs';
const router = express.Router();

router.get('/proof-book',proofBook);
router.post('/register-book',registerBook);
router.get('/list-book',listBook);
router.put('/update-book/:id',updateBook);


export default router;

