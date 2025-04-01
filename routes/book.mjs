import express from 'express';
import { proofBook, registerBook, listBook, updateBook, oneBook }  from '../controllers/book.mjs';
const router = express.Router();

router.get('/proof-book',proofBook);
router.post('/register-book',registerBook);
router.get('/list-book',listBook);
router.put('/update-book/:id',updateBook);
router.get('/one-book/:link', oneBook);


export default router;

