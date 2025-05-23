import express from 'express';
import { getProducts, postProducts, deleteProducts, } from '../controllers/productController.js';

const router = express.Router();

router
  .get('/', getProducts)
  .post('/', postProducts)
  .delete('/:id', deleteProducts)
  

export default router;
