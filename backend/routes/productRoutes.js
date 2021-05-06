import express from 'express';
import {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  updateProductStock,
  createProductReview,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.route('/').get(getProducts);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
router.route('/:id/updatestock').put(protect, updateProductStock);
router.route('/:id/stock').put(protect, updateProductStock);

export default router;
