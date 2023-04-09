import mongoose from 'mongoose'

const shopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      
    },
    postalCode:{
        type:Number,
        required:true,
        default:0,
        unique: true,
    }
   
  },
  {
    timestamps: true,
  }
)

const Shop = mongoose.model('Shop', shopSchema)

export default Shop