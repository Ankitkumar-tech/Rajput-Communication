import mongoose from "mongoose";
import colors from "colors"
const connectDB = async ()=>{
    try {
        
        const conn =await mongoose.connect("mongodb+srv://Rajan:Rajan1010@cluster0.mmzeoot.mongodb.net/Rajput-Communication", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log(`Connected to Mongodb Database ${conn.connection.host}`);
    } catch (error) {
        console.log(`error is data base ${error}`.bgRed.white)
    }
} 

export default connectDB