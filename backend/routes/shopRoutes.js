import express from 'express'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'
import {
  getShops,
  getShopById,
  deleteShop,
  createShop,
  updateShop, 
} from '../controllers/shopController.js'

router.route('/').get(getShops).post(protect, admin, createShop)
router
  .route('/:id')
  .get(getShopById)
  .delete(protect, admin, deleteShop)
  .put(protect, admin, updateShop)
export default router