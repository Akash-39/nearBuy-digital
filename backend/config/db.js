import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: "./.env" });

// // connecting DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

      
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}




// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });
// const app = require("./app");



const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

console.log(DB);

// mongoose
// .connect(DB, {
//     auth: {
//       user: process.env.MONGO_DB_USER,
//       password: process.env.MONGO_DB_PASSWORD,
//     },
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("DB connection successful!"));


  export default connectDB;