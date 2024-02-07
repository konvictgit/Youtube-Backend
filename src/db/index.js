import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
      const connectionInstance = await mongoose.connect("mongodb+srv://AbhishekYadav:WgZ4phmb0Ys0G6EC@cluster0.nq3ls62.mongodb.net/"+DB_NAME)
      console.log(process.env.MONGODB_URI);
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`); 
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}

export default connectDB
