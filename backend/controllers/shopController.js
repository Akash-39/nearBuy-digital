import asyncHandler from 'express-async-handler'
import Shop from '../models/shopModel.js'

// @desc    Fetch all shops
// @route   GET /api/shops
// @access  Public
const getShops = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Shop.countDocuments({ ...keyword })
  const shops = await Shop.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ shops, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single shop
// @route   GET /api/shops/:id
// @access  Public
const getShopById = asyncHandler(async (req, res) => {
  const shop = await Shop.findById(req.params.id)

  if (shop) {
    res.json(shop)
  } else {
    res.status(404)
    throw new Error('Shop not found')
  }
})

// @desc    Delete a shop
// @route   DELETE /api/shops/:id
// @access  Private/Admin
const deleteShop = asyncHandler(async (req, res) => {
  const shop = await Shop.findById(req.params.id)

  if (shop) {
    await shop.remove()
    res.json({ message: 'Shop removed' })
  } else {
    res.status(404)
    throw new Error('Shop not found')
  }
})

// @desc    Create a shop
// @route   POST /api/shops
// @access  Private/Admin
const createShop = asyncHandler(async (req, res) => {
  const shop = new Shop({
    name: 'Sample name',
    address: 'Sample address',
    postalCode: 'Sample postalCode',
    user: req.user._id,
    
  })

  const createdShop = await shop.save()
  res.status(201).json(createdShop)
})

// @desc    Update a shop
// @route   PUT /api/shops/:id
// @access  Private/Admin
const updateShop = asyncHandler(async (req, res) => {
  const {
    name,
    address,
    postalCode
  } = req.body

  const shop = await Shop.findById(req.params.id)

  if (shop) {
    shop.name = name
    shop.address = address
    shop.postalcode = postalCode
    

    const updatedShop = await shop.save()
    res.json(updatedShop)
  } else {
    res.status(404)
    throw new Error('Shop not found')
  }
})


export {
  getShops,
  getShopById,
  deleteShop,
  createShop,
  updateShop,
}  